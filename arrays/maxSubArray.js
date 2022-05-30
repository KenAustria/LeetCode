// Runtime: 60ms
// Time Complexity: O(n)
// Space Complexity: O(n)
// Memory: 35.MB
const maxSubArray = nums => {
  // initialize current sum and maximum sum to -Infinity
  let currSum = -Infinity;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    // if current sum is below zero, assign zero as the current sum
    currSum = Math.max(0, currSum);
    // add current index value to current sum
    currSum += nums[i];
    // if current sum is greater than maximum sum, assign current sum to maximum sum
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

// [-2,1,-3,4,-1,2,1,-5,4]
// currSum = 0, max = -∞
// i=0: currSum = -2 vs -2 so -2. max = -2
// i=1: currSum = -1 or 1 so we forget about currSum and start over with currSum=1 and thus max=1
// i=2: currSum = -2 or -3 so we add it up and currSum=-2 and max stays 1
// i=3: currSum = 2 or 4 so we forget about currSum and start over with currSum=4 and thus max=4
// i=4: currSum = 3 or -1 so we add it up and currSum=3 but max stays 4
// i=5: currSum = 5 or 2 so we add it up and currSum=5 and thus max=5
// i=6: currSum = 6 or 1 so we add it up and currSum=6 and thus max=6
// i=7: currSum = 1 or -5 so we add it up and currSum=1 but max stays max=6
// i=8: currSum = 5 or 4 so we add it up and currSum=5 but max stays 6

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6

console.log(maxSubArray([-2, -11, -13, -2, -14, -9, -5, -15, -3]));
// Output: -2
// Explanation: [-2] has the largest sum = -2

console.log(maxSubArray([-2, 0, -1]));
// Output: 0
// Explanation: [0] has the largest sum = 0
