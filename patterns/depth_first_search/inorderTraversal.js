/*
	The inorderTraversal function takes in the root of a binary tree and returns an array of the values of its nodes in inorder traversal.
Inorder traversal visits the left subtree, then the root node, and finally the right subtree.

	Inorder traversal is a way to traverse a binary tree where we first visit the left subtree of the root, then the root itself, and
finally the right subtree. In other words, we visit the nodes in the order left, root, right. This type of traversal is commonly used
to get the values of nodes in sorted order in a binary search tree.

	The algorithm uses a stack to keep track of the nodes that it has visited. The stack and res arrays are initialized, and the function
enters into a while loop that continues as long as the root node exists or there are still elements in the stack array.

	Within the while loop, there is an if statement that checks if the root node exists. If it does, the root node is pushed onto the stack,
and then root is assigned to root.left to traverse to the left subtree.

	If root doesn't exist, it is popped off the stack, and its value is pushed to the res array. Then, root is assigned to root.right to
traverse to the right subtree.

	This process continues until all nodes have been visited and the res array is filled with the inorder traversal of the binary tree.
The time complexity of this algorithm is O(n) because it visits each node once, and the space complexity is O(h), where h is the height
of the tree, because the size of the stack is proportional to the maximum height of the binary tree.

Time = O(n), Space = O(h)
	The time complexity of the inorderTraversal function is O(n) because in the worst case scenario, we will have to visit each node once.
This is because we traverse the entire tree and visit each node exactly once.

	The space complexity of the function is O(h) where h is the height of the tree. This is because we are using a stack to keep track of
the nodes we have visited. In the worst case scenario, the height of the tree is equal to the number of nodes in the tree, so the space 
complexity is O(n). However, if the tree is balanced, the height of the tree is log n, so the space complexity would be O(log n).
*/

// This function takes the root of a binary tree and returns its inorder traversal.
const inorderTraversal = root => {
	// Create an empty stack and an empty array to store the result.
	const stack = []
	const res = []
  
	// While the current node is not null or the stack is not empty, keep traversing.
	while (root || stack.length) {
	  // If the current node is not null, push it into the stack and move to its left child.
	  if (root) {
		stack.push(root)
		root = root.left
	  } else {
		// If the current node is null, pop a node from the stack, add it to the result array, and move to its right child.
		root = stack.pop()
		res.push(root.val)
		root = root.right
	  }
	}
  
	// Return the result array.
	return res
}
  

console.log(`The binary tree traversal of [1,null,2,3] is : ${inorderTraversal([1, null, 2, 3])}`); // [1,3,2]
console.log(`The binary tree traversal of [] is : ${inorderTraversal([])}`); // []
console.log(`The binary tree traversal of [1] is : ${inorderTraversal([1])}`); // [1]