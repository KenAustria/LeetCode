// Runtime: ms
// Time Complexity: O(n)
// Space Complexity: O(n)
// Memory: MB
const minimumDifference = (nums, k) => {
	nums.sort()
	let l = 0
	let r = k - 1

	let minDiff = Infinity

	while (r < nums.length) {
		minDiff = Math.min(minDiff, nums[r] - nums[l])
		l = l + 1
		r = r + 1
	}

	return minDiff
};

console.log(minimumDifference([90], 1)); // 0
console.log(minimumDifference([9,4,1,7], 2)); // 2
console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918], 6)); // -34612
