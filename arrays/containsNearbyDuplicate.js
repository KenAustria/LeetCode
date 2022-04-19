// Runtime: 110ms
// Time Complexity: O(1)
// Space Complexity: O(1)
// Memory: 66.1MB
const containsNearbyDuplicate = (nums, k) => {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.hasOwnProperty(nums[i]) && i - numsMap.get(nums[i] <= k)) {
      return true;
    }
    numsMap.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
