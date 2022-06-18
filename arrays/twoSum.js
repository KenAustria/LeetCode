// Strategy: Two Pass Hash Map
// Runtime: 56ms
// Time Complexity: O(n)
// Space Complexity: O(n)
// Memory: 35MB
const twoSum = (nums, target) => {
  // declare host hash
  let numsIndices = {};

  // populate host hash, map each array element to its index
  nums.forEach((num, index) => {
    numsIndices[num] = index;
  });

  // initiate loop
  for (let i = 0; i < nums.length; i += 1) {
    // diff is the second number to lookup in the object
    let diff = target - nums[i];

    // if diff exist in our object AND it isn't our current index to prevent duplicates
    if (numsIndices[diff] && numsIndices[diff] !== i) {
      return [i, numsIndices[diff]];
    }
  }
};

console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([6, 2, 3, 9, -5, 5, 7, 2], 1)); // [0, 4]
console.log(twoSum([2, -3, 1, -5], -3)); // [0, 3]
