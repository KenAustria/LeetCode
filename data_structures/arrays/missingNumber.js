// Runtime: 109ms
// Time Complexity: O(n)
// Space Complexity: O(n)
// Memory: 44.4MB
const missingNumber = nums => {
  // construct array of size n+1, to leave a spot for the missing element.
  // assign each val to -1 so we can see which position was not filled
  const res = new Array(nums.length + 1).fill(-1);

  // sort the elements by assigning to the array based on val
  for (const num of nums) {
    res[num] = num;
  }

  // the remaining -1 index is the missing value
  return res.indexOf(-1);
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
