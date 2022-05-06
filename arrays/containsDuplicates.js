// Runtime: 76ms
// Time Complexity: O(1)
// Space Complexity: O(1)
// Memory: 42.6MB
const containsDuplicate = nums => {
  // declare host hash
  let numsQuantity = {};

  // iterate nums array
  for (let i = 0; i < nums.length; i += 1) {
    // populate hash, if the array element exist in the hash, increment by 1, otherwise assign the value of 1
    numsQuantity[nums[i]] = numsQuantity[nums[i]] + 1 || 1;

    // if that array element's value in the hash is greater than 1, return true
    if (numsQuantity[nums[i]] > 1) return true;
  }

  // no duplicate found
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
