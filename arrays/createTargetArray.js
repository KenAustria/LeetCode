// Runtime: 125ms
// Memory: 38.9MB
// Time Complexity: O(n)
// Space Complexity: O(n)

const createTargetArray = (nums, index) => {
	const targetArr = []

	for ( let i = 0; i < nums.length; i++) {
		targetArr.splice(index[i], 0, nums[i])
	}

	return targetArr
};

console.log(reateTargetArray([0,1,2,3,4], [0,1,2,2,1])); // [0,4,1,3,2]
console.log(reateTargetArray([1,2,3,4,0], [0,1,2,3,0])); // [0,1,2,3,4]
console.log(reateTargetArray([1], [0])); // [1]

