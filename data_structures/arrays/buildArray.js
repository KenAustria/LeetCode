// Runtime: 92ms
// Time Complexity: O(n)
// Space Complexity: O(1)
// Memory: 42.2MB
const buildArray = () => {
  return nums.map(i => nums[i]);
};

console.log(buildArray([0, 2, 1, 5, 3, 4])); // [0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // [4,5,0,1,2,3]
