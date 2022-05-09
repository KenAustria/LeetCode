// Technique: Bit Manipulation
// Runtime: 91ms
// Time Complexity: O(n)
// Space Complexity: O(1)
// Memory: 43MB

const singleNumber = nums => {
  // ^ refers to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR
  // whenever i see a new value, include its bit, else remove its bit
  return nums.reduce((prev, curr) => prev ^ curr);
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
