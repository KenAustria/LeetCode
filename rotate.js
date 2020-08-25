// Runtime: 100ms
// Time complexity:
// Memory: 38.1MB
const rotate = function(nums, k) {
	nums.unshift(...nums.splice((nums.length - k)))
	return nums;
}

console.log(rotate([1,2,3,4,5,6,7], 3));	// [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2));		// [3,99,-1,-100]
