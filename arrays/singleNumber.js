var singleNumber = function(nums) {
	var obj = {};
	for (var i = 0; i < nums.length; i++) {
		nums[i] in obj ? delete obj[nums[i]] : obj[nums[i]] = 1
	}
	return Object.keys(obj)[0];
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));