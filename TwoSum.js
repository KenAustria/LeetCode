// Runtime: 56ms
// Time complexity: O(n)
// Memory: 35MB
const twoSum = function(nums, target) {
	// declare host hash
	let numsIndices = {};

	// populate host hash, map each array element to its index
	nums.forEach((num, index) => {
		numsIndices[num] = index
	});

	// initiate loop
	for (let i = 0; i < nums.length; i += 1) {
		// diff is the second number to lookup in the object
		let diff = target - nums[i];

		// if diff exist in our object AND it isn't our current index to prevent duplicates
		if (numsIndices[diff] && (numsIndices[diff] !== i)) {
			return [i, numsIndices[diff]];
		}
	}
}

// Runtime: 120ms
// Time complexity: O(n²)
// const twoSum = function(nums, target) {
// 	// iterate through nums, starting at index[0]
// 	for (let i = 0; i < nums.length; i++) {
// 		// iterate through nums, always 1 position ahead of i
// 		for (let j = i + 1; i < nums.length; j++) {
// 			// if iterating indices add up to target's value
// 			if (nums[i] + nums[j] === target) {
// 				// insert onto indices
// 				return [i, j]
// 			}
// 		}
// 	}
// };

console.log(twoSum([3, 2, 4], 6));                 // [1, 2]
console.log(twoSum([6, 2, 3, 9, -5, 5, 7, 2], 1)); // [0, 4]
console.log(twoSum([2, -3, 1, -5], -3));           // [0, 3]