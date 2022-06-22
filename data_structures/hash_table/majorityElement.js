// Runtime: 84ms
// Time complexity: O(n)
// Memory: 41.6MB
const majorityElement = (nums) => {
	let numsQuantity = {}

	for (let i = 0; i < nums.length; i+=1) {
		numsQuantity[nums[i]] = numsQuantity[nums[i]] + 1 || 1
		if (numsQuantity[nums[i]] > (nums.length / 2)) {
			return [nums[i]]
		}
	}

};

console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2,2,1,1,1,2,2])) // 2
