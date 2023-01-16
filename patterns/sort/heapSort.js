// Time = O(nlog(n)) | Space = O(1)

const heapSort = arr => {
	// initialize variables
	const size = arr.length;
	// recursively build a max heap
	for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
		// start with the index of the last parent node.
		// heapify: swaps parent with child as long as child is larger than parent.
		heapify(arr, size, i)
	}

	// iterate heap backwards, swap heap's last el with heap's max el (heap's root)
	// max elements swapped to the end constitute the sorted part of the array (ignored in the next iteration by "i--")
	for (let i = size - 1; i >= 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]]
		// build a max heap again in preparation for the swap in the next iteration.
		heapify(arr, i, 0)
	}

	return arr
}
const heapify = (arr, size, parentIdx) => {
	// initiate largest value's index with parent index.
	let largest = parentIdx;
	// calculate index of left child.
	const leftChildIdx = 2 * parentIdx + 1;
	// calculate index of right child.
	const rightChildIdx = 2 * parentIdx + 2;
	// set `largest` to index with highest value between parent, left and right child.
	// if left child of parent exists and is larger than parent.
	if (leftChildIdx < size && arr[leftChildIdx] > arr[largest]) largest = leftChildIdx;
	// if right child of parent exists and is larger than parent.
	if (rightChildIdx < size && arr[rightChildIdx] > arr[largest]) largest = rightChildIdx;
	// if `largest` is not the current parent, swap positions with the current parent.
	if (largest !== parentIdx) {
		[arr[parentIdx], arr[largest]] = [arr[largest], arr[parentIdx]];
		// continue to recursively heapify the affected subtree.
		heapify(arr, size, largest);
	}
}

console.log(heapSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
console.log(heapSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]
