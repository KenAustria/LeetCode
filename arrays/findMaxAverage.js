// Runtime: 94ms
// Time Complexity: O(n)
// Space Complexity: O(n)
// Memory: 55.9MB
const findMaxAverage = (nums, k) => {
  // find sum of current window
  let currWindowSum = nums
    .slice(0, k)
    .reduce((currWindowVal, currWindowIdx) => currWindowVal + currWindowIdx, 0);
  let maxWindowSum = currWindowSum;
  // k length is equal to max window index, (k = 4 == maxWindowIdx = 3)
  let maxWindowIdx = nums.length - k + 1;

  for (let i = 1; i < maxWindowIdx; i++) {
    // previous index value to be excluded
    let notIncludedInWindowSum = nums[i - 1];
    // last idx value of current windwow
    let currWindowIdxVal = nums[i + k - 1];
    currWindowSum = currWindowSum - notIncludedInWindowSum + currWindowIdxVal;
    maxWindowSum = Math.max(maxWindowSum, currWindowSum);
  }
  return maxWindowSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
