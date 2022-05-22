// Technique: Recursive
// Runtime: 80ms
// Time Complexity: O(log n)
// Space Complexity: O(n)
// Memory: 44.3MB

const sortedArrayToBST = (nums, start = 0, end = nums.length - 1) => {
  // since nums array is sorted ascendingly, start should always be <= to end
  if (start <= end) {
    // declare variables
    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums, start, mid - 1);
    root.right = sortedArrayToBST(nums, mid + 1, end);

    return root;
  }

  // error check
  return null;
};

console.log(sortedArrayToBST(-10, -3, 0, 5, 9)); // [0, -3, -10, null, 5]
console.log(sortedArrayToBST([1, 3])); // [3, 1]
