// Runtime: 68ms
// Memory: 40.5MB
// Time Complexity: O(n)
// Space Complexity: O(n)

const shuffle = () => {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]
console.log(shuffle((nums = [1, 2, 3, 4, 4, 3, 2, 1]), 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffle((nums = [1, 1, 2, 2]), 2)); // [1,2,1,2]
