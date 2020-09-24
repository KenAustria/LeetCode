// Runtime: 96ms
// Time complexity: O(log n)
// Memory: 36.9MB
const search = function(nums, target) {
	// declare polar indices
	let left = 0
	let right = nums.length - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)

		if (nums[mid] === target) {
			return mid
		}

		// when dividing rotated array into halves, one must be sorted
		if (nums[left] <= nums[mid]) {
			// if left is sorted
			if ((nums[left] <= target) && target <= nums[mid]) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
      if ((nums[mid] <= target) && (target <= nums[right])) {
				left = mid + 1
			} else {
				right = mid - 1
			}
    }
	}

	// case for nums == null || nums.length == 0 || target not found
	return -1
};

console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([1], 0)); // -1