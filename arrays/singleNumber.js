// Technique: Bit Manipulation
// Runtime: 91ms
// Time Complexity: O(n)
// Space Complexity: O(1)
// Memory: 43MB

const singleNumber = nums => {
  return nums.reduce((prev, curr) => prev ^ curr);
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
