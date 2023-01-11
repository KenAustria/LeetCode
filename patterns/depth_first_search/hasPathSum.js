// Time = O(N), Space = O(log(N))

const hasPathSum = (root, sum) => {
	if (!root) return false

	// condition: current node is a leaf
	if ((!root.left) && (!root.right)) return (sum === root.val)
	// condition: truthy falsy recursion
	// // sum decreased by the current node value
	return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}

hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22) // true
hasPathSum([1, 2, 3], 5) // false
hasPathSum([], 0) // false