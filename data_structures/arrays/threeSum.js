// Runtime: ms
// Time complexity:
// Memory: MB
const threeSum = function(nums) {
	nums = nums.sort()
	let nums_arr = []

	for (let i = 0; i < nums.length; i++) {
		if (i == 0 || (i > 0 && nums[i] != nums[i-1])) {
			let low = i + 1;
			let high = nums.length - 1;
			let sum = 0 - nums[i]

			while (low < high) {
				if (nums[low] + nums[high] == sum) {
					nums.push([nums[i], nums[low], nums[high]])
					while ((low < high) && (nums[low] == nums[low + 1])) {
						low++;
					}
					while ((low < high) && (nums[high] == nums[high - 1])) {
						high--;
					}
				} else if ((nums[low] + nums[high]) > sum) {
					high--;
				} else {
					low++;
				}
			}
		}
	}

	return nums_arr;
};

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []