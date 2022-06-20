/*
Strategy: One Pass Hash Map
Runtime: 138ms
Time Complexity: O(n)
Space Complexity: O(n)
Memory: 43.4MB
*/

const twoSum = (nums, target) => {
  // declare host hash
  let seenHash = {};

  // iterate loop
  for (let i = 0; i < nums.length; i += 1) {
    // diff is the second number to lookup in the object
    let diff = target - nums[i];

    /* while iterating and inserting elements into hash map,
    ..also check if current element's complement already exist in the hash map */
    if (seenHash[diff] !== undefined) {
      // if exist, return
      return [i, seenHash[diff]];
      // else, map array element to its index
    } else {
      seenHash[nums[i]] = i;
    }
  }
};

/*
Complexity Analysis:
Time Complexity : O(n)
We iterate the array containing n elements only once. Each look up in the hash costs only O(1) time.

Space Complexity: O(n)
The extra space required depends on the number of items stored in the hash, which stores at most n elements.
*/

/*
Strategy: Two Pass Hash Map
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
*/

console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([6, 2, 3, 9, -5, 5, 7, 2], 1)); // [0, 4]
console.log(twoSum([2, -3, 1, -5], -3)); // [0, 3]
