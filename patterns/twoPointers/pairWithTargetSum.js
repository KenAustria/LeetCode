/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

const pairWithTargetSum = (arr, targetSum) => {
	// declare variables
	let left = 0,
		right = arr.length - 1

	while (left < right) {
		const currentSum = arr[left] + arr[right]
		if (currentSum === targetSum) {
			return [left, right]
		}

		if (targetSum > currentSum) {
			// since array is sorted, increment the start pointer
			left += 1
		} else if (targetSum < currentSum) {
			// since array is sorted, decrement the end pointer
			right -= 1
		}
	}

	// no matches
	return [-1, -1]
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pairWithTargetSum([2, 5, 9, 11], 11)); // [0, 2]