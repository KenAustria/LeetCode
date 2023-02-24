/*
	This code implements a function called rangeSumBST that takes in the root node of a binary search tree and two
numbers low and high. It returns the sum of all nodes whose values fall within the range of low to high.

	The function initializes a sum variable to 0 and checks if the root is null. If it is, the function returns the
sum variable, which is still 0.

	Next, the function creates an empty stack and adds the root node to it. The function then enters a loop to process
each node in the stack. Within the loop, the function pops the last node from the stack and checks if the node's value
falls within the range of low and high. If it does, the node's value is added to the sum variable.

	The function then checks if the node's value is greater than low and has a left child. If both conditions are true,
the function adds the left child to the stack. Similarly, the function checks if the node's value is less than high and
has a right child. If both conditions are true, the function adds the right child to the stack. In a binary search tree,
all nodes in the left subtree of a given node have values less than the node's value and all nodes in the right subtree
of a given node have values greater than the node's value.

	The function repeats this process until there are no more nodes in the stack. Finally, the function returns the sum
variable, which contains the sum of all nodes within the range of low to high.

Time: O(n), Space: O(h)

    The time complexity of this function is O(n), where n is the number of nodes in the binary search tree. This is 
because the function traverses each node in the tree once, and each node is only visited once. The space complexity of 
this function is O(h), where h is the height of the binary search tree. This is because the maximum number of nodes that
can be stored in the stack at any given time is equal to the height of the tree. In the worst case, when the tree is 
completely unbalanced and resembles a linked list, the space complexity will be O(n), but in the average case the space 
complexity will be O(h).
*/

// This function takes in the root of a binary search tree and two numbers low and high.
const rangeSumBST = (root, low, high) => {
	// Initialize the sum variable to 0.
	let sum = 0;
	// If the root is null, return the sum of 0.
	if (!root) return sum;
  
	// Create an empty stack and add the root node to it.
	const stack = [root];
  
	// Process each node in the stack in a loop.
	while (stack.length > 0) {
	  // Pop the last node from the stack.
	  const node = stack.pop();
  
	  // If the node's value is within the range of low and high, add it to the sum.
	  if (node.val >= low && node.val <= high) {
		sum += node.val;
	  }
  
	  // If the node's value is greater than low and has a left child, add the left child to the stack.
	  if (node.val > low && node.left) {
		stack.push(node.left);
	  }
  
	  // If the node's value is less than high and has a right child, add the right child to the stack.
	  if (node.val < high && node.right) {
		stack.push(node.right);
	  }
	}
  
	// Return the sum of all nodes within the range.
	return sum;
};
  

console.log(`The sum of the range between left and right is: ${rangeSumBST([10,5,15,3,7,null,18], 7, 15)}`); // 32
console.log(`The sum of the range between left and right is:  ${rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10)}`); // 23