// Runtime: 80ms
// Time Complexity: O(n)
// Memory: 37.1MB
const maxProduct = function(nums) {
  let prev_min_product = nums[0]
  let prev_max_product = nums[0]
	let max_product_result = nums[0]

	// iterate from [1] because globals initiated at [0]
  for (let i = 1; i < nums.length; i++) {
		// find min and max from options
    let curr_min = Math.min(nums[i] * prev_min_product, nums[i], nums[i] * prev_max_product)
    let curr_max = Math.max(nums[i] * prev_min_product, nums[i], nums[i] * prev_max_product)

		// update values
		prev_min_product = curr_min
    prev_max_product = curr_max
    max_product_result = Math.max(max_product_result, curr_max)
  }

  return max_product_result

}

console.log(maxProduct([2,3,-2,4])) // 6
console.log(maxProduct([-2,0,-1])) // 0
console.log(maxProduct([-1,-2,-3,-4,-5])) // 120