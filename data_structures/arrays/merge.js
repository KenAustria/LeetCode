// Runtime: 109ms
// Time Complexity: O(n)
// Space Complexity: O(1)
// Memory: 41.9MB
const merge = (nums1, m, nums2, n) => {
  // starts at the last index of nums1
  let insertPos = m + n - 1;
  m--;
  n--;

  // merge in reverse order
  while (n >= 0) {
    // find the greater value between the current elements of nums1 and nums2
    // if greater, replace current pointer with nums1[m], then decrement m
    // else, replace current pointer with nums2[n], then decrement n
    // regardless of which element is replaced, decrement insertPos
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};

console.log(
  merge(nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3)
); // [1,2,2,3,5,6]
console.log(merge(nums1 = [1], m = 1, nums2 = [], n = 0); // [1]
console.log(merge(nums1 = [0], m = 0, nums2 = [1], n = 1)); // [1]
