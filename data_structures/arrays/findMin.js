// Runtime: ms
// Time complexity:
// Memory: MB
const findMin = function(nums) {
	// define count for loop
	let left = 0;
	let right = nums.length - 1;

  while (left < right) {
		let midpoint = Math.floor((left + right) / 2);
		// set the midpoint and divide
		(nums[midpoint] > nums[right]) ? left = midpoint + 1 : right = midpoint
  }
  return nums[left];
};

console.log(findMin([3,4,5,1,2])); // 1

// in sorted arr, current is never less than previous