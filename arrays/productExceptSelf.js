const productExceptSelf = function(nums) {
	let output_arr = [1];

  // forward, initialize loop at 1 because there's nothing to the left of start
	for (let i = 1; i < nums.length; i++) {
		// next nums arg element times previous product
    output_arr[i] = nums[i-1] * output_arr[i-1]
	}

	let right = 1; // constant space complexity
  // backwards, initialize loop at last because there's nothing to the right of end
	for (let i = nums.length - 1; i >= 0; i--) {
		output_arr[i] = output_arr[i] * right;
		right = right * nums[i]
	}

	return output_arr

}

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
