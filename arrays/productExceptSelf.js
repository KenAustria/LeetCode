// Runtime: 108ms
// Time Complexity: O(n)
// Memory: 42.5MB
const productExceptSelf = function(nums) {
	let output_arr = [1];

  // loop forward, initialize at 1 because there's nothing to the left of [0]
	for (let i = 1; i < nums.length; i++) {
		// next nums arg element times previous product
    output_arr[i] = nums[i-1] * output_arr[i-1]
	}

	let right = 1; // constant space complexity
  // loop backwards, initialize from last because there's nothing to the right nums.length-1
	for (let i = nums.length - 1; i >= 0; i--) {
		output_arr[i] = output_arr[i] * right;
		right = right * nums[i]
	}

	return output_arr
}

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
