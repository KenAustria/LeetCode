let singleNumber = function(nums) {
	let nums_hash = {};
	for (var i = 0; i < nums.length; i++) {
		nums[i] in nums_hash ? delete nums_hash[nums[i]] : nums_hash[nums[i]] = 1
	}
	return Object.keys(nums_hash)[0];
};

console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4