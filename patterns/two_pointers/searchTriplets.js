/*
Time Complexity: triplet_with_smaller_sum = O(N2), searchPair = O(N)
Space Complexity: O(N)
*/

// fn to return triplet count
const searchTriplets = (arr, target) => {
	// sort ascendingly, O(N ∗ logN)
	arr.sort((a, b) => a - b)
	let count = 0

	// i is first of 3 pointers to find triplets
	// arr.length-2 to prevent going over the boundary
	for (let i = 0; i < arr.length - 2; i++) {
		count += searchPair(arr, target - arr[i], i)
	}

	return count
}

// O(N)
const searchPair = (arr, targetSum, first) => {
	let count = 0,
	// left is second of 3 pointers to find triplets
		left = first + 1
	// right is third of 3 pointers to find triplets
	right = arr.length - 1

	while (left < right) {
		// found the triplet
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

console.log(searchTriplets([-1, 0, 2, 3], 3)) // 2
console.log(searchTriplets([-1, 4, 2, 1, 3], 5)); // 4

/* ------------------------------------------------------- */

// fn to return triplets list
// const searchTriplets = (arr, target) => {
// 	// sort ascendingly, O(N ∗ logN)
// 	arr.sort((a, b) => a - b)
// 	const triplets = []

// 	for (let i = 0; i < arr.length - 2; i++) {
// 		searchPair(arr, target - arr[i], i, triplets)
// 	}

// 	return triplets
// }

// const searchPair = (arr, targetSum, first, triplets) => {
// 	let left = first + 1
// 	right = arr.length - 1

// 	while (left < right) {
// 		// found the triplet
// 		if ((arr[left] + arr[right]) < targetSum) {
// 			// since arr[right] >= arr[left], therefore, we can replace arr[right] by any
// 			// number between left and right to get a sum less than the target sum
// 			for (i = right; i > left; i--) {
// 				triplets.push([arr[first], arr[left], arr[i]]);
// 			}
// 			left += 1
// 		} else {
// 			// we need a pair with a smaller sum
// 			right -= 1
// 		}
// 	}
// }

// console.log(searchTriplets([-1, 0, 2, 3], 3));[[-1, 0, 3], [-1, 0, 2]]
// console.log(searchTriplets([-1, 4, 2, 1, 3], 5));[[-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]]