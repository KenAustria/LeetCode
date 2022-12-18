/*
Time Complexity: O(N2)
Space Complexity: O(N)
*/

const tripletSumCloseToTarget = (arr, targetSum) => {
	// sort ascendingly, O(N∗logN)
	arr.sort((a, b) => a - b)
	let smallestDifference = Infinity;

	// i is first of 3 pointers to find triplets
	// arr.length-2 to prevent going over the boundary
	for (let i = 0; i < arr.length - 2; i++) {
		// left is second of 3 pointers to find triplets
		let left = i + 1,
			// right is third of 3 pointers to find triplets
			right = arr.length - 1

		while (left < right) {
			const targetDiff = targetSum - arr[i] - arr[left] - arr[right]
			// we've found a triplet with the exact sum
			if (targetDiff === 0) {
				// return sum of all numbers
				return sum
			}

			// this "if" statement is to handle the smallest sum when more than one solution exists
			if ((Math.abs(targetDiff) < Math.abs(smallestDifference)) ||
				(Math.abs(targetDiff) === Math.abs(smallestDifference) &&
					(targetDiff > smallestDifference))) {
				// save the closest and biggest difference
				smallestDifference = targetDiff
			}

			if (targetDiff > 0) {
				// find triplet with bigger sum
				left += 1
			} else {
				// find triplet with smaller sum
				right -= 1
			}
		}
	}

	return targetSum - smallestDifference
}

console.log(tripletSumCloseToTarget([-2, 0, 1, 2], 2)); // 1, The triplet [-2, 1, 2] has the closest sum to the target.
console.log(tripletSumCloseToTarget([-3, -1, 1, 2], 1)); // 0, The triplet [-3, -1, 1, has the closest sum to the target.
console.log(tripletSumCloseToTarget([1, 0, 1, 1], 100, 2)); // 3, The triplet [1,1,1] has the closes sum to the target.