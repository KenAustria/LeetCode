/*
	This code defines a function diameterOfBinaryTree that takes in the root of a binary tree and returns the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree, which may or may not pass through
the root. The length of a path between two nodes is represented by the number of edges between them.

The function starts by initializing a variable maxDiameter to 0. This variable will hold the maximum diameter of the binary tree.

	Then, the function defines a recursive function depth that takes in a node and returns the depth of the subtree rooted at that node.
If the node is null, the function returns 0. Otherwise, the function recursively calculates the depth of the left and right subtrees
and returns the maximum depth of the two plus 1. During the calculation of the depth, the function also calculates the diameter of the
tree passing through this node and updates the maximum diameter if necessary using the formula leftDepth + rightDepth.

	Finally, the function calls the depth function on the root of the binary tree to calculate the maximum diameter. It then returns the
maximum diameter of the binary tree.

Time = O(n), Space = O(h)
	The time complexity of this algorithm is O(n), where n is the number of nodes in the binary tree. This is because we need to visit each
node in the tree once to calculate its depth and update the maximum diameter. The depth function is called recursively on each node in the
tree, so the total number of function calls is proportional to the number of nodes in the tree.

The space complexity of this algorithm is O(h), where h is the height of the binary tree. This is because the depth function is called 
recursively on each node in the tree, and the maximum number of function calls on the call stack is equal to the height of the tree. 
Therefore, the space complexity is proportional to the height of the tree.
*/

// This function takes in the root of a binary tree and returns the diameter of the tree.
const diameterOfBinaryTree = (root) => {
	// Initialize the maximum diameter to 0.
	let maxDiameter = 0;
  
	// This recursive function returns the depth of a given node in the tree.
	const findDepth = (currentNode) => {
	  // If the currentNode is null, return 0.
	  if (!currentNode) return 0;
  
	  // Recursively calculate the depth of the left and right subtrees.
	  const leftDepth = findDepth(currentNode.left);
	  const rightDepth = findDepth(currentNode.right);
  
	  // Calculate the diameter of the tree passing through this currentNode and update the maximum diameter if necessary.
	  maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
  
	  // Return the depth of the subtree rooted at this currentNode.
	  // Account for the current node itself as one edge in the path between the two farthest nodes.
	  return Math.max(leftDepth, rightDepth) + 1;
	};
  
	// Call the depth function on the root of the tree to calculate the maximum diameter.
	findDepth(root);
  
	// Return the maximum diameter of the binary tree.
	return maxDiameter;
};
  
console.log(`The diameter of [1,2,3,4,5] is ${diameterOfBinaryTree([1, 2, 3, 4, 5])}`); // 3
console.log(`The diameter of [1,2] is ${diameterOfBinaryTree([1, 2])}`); // 1