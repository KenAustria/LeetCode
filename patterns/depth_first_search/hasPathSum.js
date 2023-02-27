/*
	The algorithm hasPathSum takes a binary tree root and an integer sum as input and returns true if there is a root-to-leaf path
in the tree where the sum of node values along the path equals sum. If such a path does not exist, the algorithm returns false.

	The algorithm starts by checking if the root node is null. If it is, the function returns false, indicating that there is no path
in the tree that can add up to sum.

	If the root node is not null, the function checks if it is a leaf node by checking if it has no left or right child. If it is a
leaf node, the function checks if the sum of the node's value and the sum passed to the function equals sum. If they are equal, it
means that a root-to-leaf path with sum sum exists, and the function returns true. Otherwise, the function returns false.

	If the root node is not a leaf node, the function recursively calls itself on the left and right child of the root node, subtracting
the value of the root node from sum each time. The function returns true if either of the recursive calls returns true, indicating that
a root-to-leaf path with sum sum exists in the left or right subtree. If both recursive calls return false, the function returns false,
indicating that there is no such path in the tree.

Time = O(n), Space = O(h)
	The time complexity of the hasPathSum function is O(n), where n is the number of nodes in the binary tree. This is because the
function visits each node in the tree once and performs a constant amount of work (i.e., comparisons and arithmetic operations) at each node.

	The time complexity of the hasPathSum function is O(n), where n is the number of nodes in the binary tree. This is because the function
visits each node in the tree once and performs a constant amount of work (i.e., comparisons and arithmetic operations) at each node.
*/

// This function determines whether there exists a root-to-leaf path in the binary tree such that 
// the sum of node values on the path equals the given sum.
// Input: root - root node of binary tree
//        sum - the target sum to find
// Output: boolean indicating whether there exists a root-to-leaf path with sum equal to target sum
const hasPathSum = (root, sum) => {
	// base case: if the root is null, there is no path with the given sum
	if (!root) return false

	// if the current node is a leaf node and its value is equal to the remaining sum, a path with 
	// the sum has been found.
	if ((!root.left) && (!root.right)) return (sum === root.val)
	
	// recursively call the function on the left and right subtree, subtracting the current node's 
	// value from the sum in each call. If either of the recursive calls returns true, the function 
	// returns true indicating a path with the given sum has been found
	return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}


hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22) // true
hasPathSum([1, 2, 3], 5) // false
hasPathSum([], 0) // false