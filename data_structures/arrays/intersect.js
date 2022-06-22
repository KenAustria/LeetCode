// Technique: JavaScript Set Object
// Runtime: 132ms
// Time Complexity: O(n)
// Space Complexity: O(1)
// Memory: 37.4MB
const intersect = (nums1, nums2) => {
  // create set for nums1
  let setNums1 = new Set(nums1);
  // create new array with filter
  // if value in nums2 exist in nums1, create new array with filter
  // ..then create new set with newly made array
  return [...new Set(nums2.filter(num => setNums1.has(num)))];
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [1, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
