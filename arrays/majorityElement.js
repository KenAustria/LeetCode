// Technique: Hash Map
// Runtime: 77ms
// Time Complexity: O(n)
// Space Complexity: O(1)
// Memory: 43.5MB

const majorityElement = nums => {
	// declare host hash
	let numsHash = {}

	// populate host hash
	for (let i = 0; i < nums.length; i++) {
		numsHash[nums[i]] = numsHash[nums[i]] + 1 || 1

		// find existing majority element
		if (numsHash[nums[i]] > nums.length > 2) return nums[i]
	}

};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
