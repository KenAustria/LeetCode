// LINEAR
// Runtime: 60ms
// Time complexity: O(n)
// Memory: 35.MB
const maxSubArray = nums => {
	// initialize current sum and maximum sum to -Infinity
	let currSum = -Infinity;
	let maxSum = -Infinity;

	for(let i = 0; i < nums.length; i++) {
		// if current sum is below zero, assign zero as the current sum
		currSum = Math.max(0, currSum);
		// add current index value to current sum
		currSum += nums[i];
		// if current sum is greater than maximum sum, assing current sum to maximum sum
		maxSum = Math.max(maxSum, currSum);
	}
	return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6

console.log(maxSubArray([-2,-11,-13,-2,-14,-9,-5,-15,-3]));
// Output: -2
// Explanation: [-2] has the largest sum = -2

console.log(maxSubArray([-2,0,-1]));
// Output: 0
// Explanation: [0] has the largest sum = 0

// -------------------------------------------------------------------

// QUADRATIC
// Runtime: ms
// Time complexity: O(n²)
// Memory: MB

// const maxSubArray = nums => {
// 	let maxSum = -Infinity;
//   let currSum;
//   for (let i = 0; i < nums.length; i++) {
//     currSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currSum += nums[j];
//       if (maxSum < currSum) {
//         maxSum = currSum;
//       }
//     }
//   }
//   return maxSum;
// }