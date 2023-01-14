// Time: O(N2) | Space: O(1)
// take in an array of integers and return an array with the integers sorted in ascending order

const insertionSort = arr => {
	// iterate, starting with the 2nd element
	for (let i = 1; i < arr.length; i++) {
		// store current value in var to be shifted to correct pos after comparisons
		let currentValue = arr[i];

		// initialize index pointer of the prev el to iterate through preceding elements
		let j = i - 1;

		// iterate while prev el is greater than curr val
		while (j >= 0 && arr[j] > currentValue) {
			// assign prev el one pos to the right if bigger than curr val
			arr[j + 1] = arr[j];

			// decrement pointer to keep comparing with prev el
			j--;
		}

		// set the curr val into final pos
		arr[j + 1] = currentValue;
	}

	// return sorted arr
	return arr;
}

insertionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
insertionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]
