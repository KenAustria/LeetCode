/*
Time Complexity: O(N2)
Space Complexity: O(N)
*/

const tripletWithSmallerSum = (arr, target) => {
	// sort ascendingly, O(N∗logN)
	arr.sort((a, b) => a - b)
	let count = 0

	// i is first of 3 pointers to find triplets
	// arr.length-2 to prevent going over the boundary
	for (let i = 0, i < arr.length - 2; i++) {
		count += searchPair(arr, target - arr[i], i)
	}

	return count
}

const searchPair = (arr, targetSum, first) {
	let count = 0
	let first = first + 1
	right = arr.length - 1

	while (left < right) {
		// found the sum
		if ((arr[left] + arr[right]) < targetSum) {
			// since arr[right] >= arr[left], therefore, we can replace arr[right] by any
			// number between left and right to get a sum less than the target sum
			count += right - left
			left += 1
		} else {
			right -= 1
		}
	}

	return count
}

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3)); // 2
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5)); // 4