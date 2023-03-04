/*
	The problem of determining if a binary tree is height-balanced requires checking if the difference in depth between the left and right
subtrees of every node is no more than 1. A binary tree is height-balanced if the depth of the left and right subtrees of every node never
differs by more than one.

	In this algorithm, a binary tree is considered height-balanced if the depth of the two subtrees of every node never differs by more
than one.

	The solution checks if the tree is null and returns true if it is, as an empty tree is considered balanced. The solution then calls
the findHeight function on the root of the binary tree. The findHeight function recursively determines the height of the binary tree by
computing the height of the left and right subtrees of the current node. If the height difference between the left and right subtrees of
a node is greater than 1, the function returns -1 to indicate that the tree is not height-balanced. If at any point the function returns
-1, the entire tree is not height-balanced, and the isBalanced function returns false. Otherwise, the isBalanced function returns true.

Thus, the solution checks if the tree is null, computes the height of the tree, and checks if the tree is height-balanced by ensuring
that the height difference between the left and right subtrees of every node is no more than 1.

Time: O(n), Space: O(h)
	The time complexity of this algorithm is O(n), where n is the number of nodes in the binary tree. This is because each node in
the binary tree is visited exactly once, and the time complexity of each visit is constant.
	The space complexity of this algorithm is O(h), where h is the height of the binary tree. This is because the maximum number of
function calls that can be on the call stack at any given time is equal to the height of the binary tree. The space complexity of this
algorithm is therefore proportional to the height of the tree, rather than the number of nodes in the tree. In the worst case, when the
binary tree is a degenerate tree (i.e., a linked list), the height of the tree is equal to the number of nodes in the tree, so the space
complexity of the algorithm is O(n). However, in the average case, the height of the binary tree is logarithmic in the number of nodes
in the tree, so the space complexity of the algorithm is O(log n).
*/
const isBalanced = root => {
	// empty trees are balanced
	if (root == null) return true
	// unbalanced trees will return -1
	if (findHeight(root) == -1) return false
	// otherwise..
	return true
}

const findHeight = root => {
	// base case
	if (!root) return 0
	// height of left and right subtrees
	let leftHeight = findHeight(root.left)
	let rightHeight = findHeight(root.right)

	// unbalanced subtrees will return -1
	if ((leftHeight == -1 || rightHeight == -1)) return -1
	// height differs more than one
	if ((Math.abs(leftHeight - rightHeight)) > 1) return -1

	// return subtree's height
	return Math.max(leftHeight, rightHeight) + 1
}

/*
HOW VALUES CHANGE WITH EACH ITERATION
	The isBalanced function checks if the input root is null. If it is, it returns true as a null tree is considered a balanced tree.
	root = [3, 9, 20, null, null, 15, 7]
	findHeight(root) = 3
	isBalanced(root) = true

	If the input root is not null, the isBalanced function calls the findHeight function on the root node to check if the tree is balanced.
The findHeight function returns -1 if any subtree of the node is unbalanced. If the findHeight function returns -1, the isBalanced function
returns false because the tree is not balanced. If the findHeight function does not return -1, the isBalanced function returns true because
the tree is balanced.
	
	iteration 1:
	root = 3
	findHeight(root) = 2
	leftHeight = 1
	rightHeight = 1
	isBalanced(root) = true

	iteration 2:
	root = 9
	findHeight(root) = 0
	leftHeight = 0
	rightHeight = 0
	isBalanced(root) = true

	iteration 3:
	root = 20
	findHeight(root) = 1
	leftHeight = -1
	rightHeight = 0
	isBalanced(root) = false

	The findHeight function first checks if the input root is null. If it is, it returns 0 because an empty tree has height 0. If the input
root is not null, the function calls itself recursively on the left and right subtrees of the root node to find their heights. It then 
checks if either subtree is unbalanced by checking if their heights are -1. If either subtree is unbalanced, the findHeight function returns
-1. If both subtrees are balanced, the function checks if the difference in height between the left and right subtrees is greater than 1.
If the difference is greater than 1, the function returns -1. Otherwise, it returns the height of the node as the maximum of the heights of
its left and right subtrees plus 1.

	iteration 1:
	root = 3
	findHeight(root) = 2
	leftHeight = 1
	rightHeight = 1
	return 2

	iteration 2:
	root = 9
	findHeight(root) = 0
	leftHeight = 0
	rightHeight = 0
	return 1

	iteration 3:
	root = 20
	findHeight(root) = 1
	leftHeight = -1
	rightHeight = 0
	return -1

	So, the input array root = [3,9,20,null,null,15,7] has been checked for balance and found to be balanced, returning true.
*/