let twoSum = function(nums, target) {
	// declare empty array to push indices into
	let indices = []

	// iterate through nums, starting at index[0]
	for (let i = 0; i < nums.length; i++) {
			// iterate through nums, starting at index[1]
			for (let j = i + 1; i < nums.length; j++) {
					// if iterating indices add up to target's value
					if (nums[i] + nums[j] === target) {
							// insert onto indices
							indices.push([i]);
							indices.push([j]);
					}
			}
	}

	// return array with matching indices
	return indices;
};