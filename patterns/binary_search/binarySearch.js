// Time = O(log(N)) | Space = O(1)
// take in a sorted array of integers and find the target integer

const binarySearch = (arr, target) => {
	// initialize variables
	let left = 0
	let right = arr.length - 1

	// search until the left and right indices meet
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (arr[mid] < target) {
			// search right half of arr if target is greater than mid
			// adjust left index so the next loop iteration searches the left side.
			left = mid + 1
		} else if (arr[mid] > target) {
			// search right half of arr if target is greater than mid
			// adjust left index so the next loop iteration searches the left side.
			right = mid - 1
		} else {
			// mid is target
			return mid
		}
	}

	// target not found
	return -1
}