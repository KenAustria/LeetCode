/*
A solution to the problem of finding whether there exist two elements in a binary search tree whose sum is equal to a given integer k.

	The function findTarget takes two arguments: root, which is the root of the binary search tree, and k, which is the target sum. The
first thing the function does is to check if the root is null or not. If the root is null, it means the tree is empty, and the function
returns false.

	If the root is not null, the function initializes a set set to store the values of the nodes visited and a stack stack to store
the nodes to be visited.

	The function then enters a while loop that runs until the stack is empty. In each iteration of the loop, the function pops a node from 
the stack and checks if there exists a node in the set whose value is equal to k minus the value of the popped node. If such a node exists,
it means that the target sum has been found, and the function returns true.

	If there is no such node in the set, the function adds the value of the popped node to the set and pushes its left and right children
onto the stack if they exist.

If the while loop completes without finding the target sum, the function returns false. 

Time = O(n), Space = O(n)
	The time complexity of this algorithm is O(n) where n is the number of nodes in the binary search tree. This is because the algorithm 
traverses each node in the tree once in the worst case.
	The space complexity of this algorithm is also O(n) where n is the number of nodes in the binary search tree. This is because the 
algorithm uses a set to store the values of the nodes visited so far, and in the worst case, all n nodes will be added to the set. 
Additionally, the algorithm uses a stack to keep track of the nodes to be visited, and the size of the stack can also be up to n in the
worst case if the tree is a skewed tree.
*/

// This function takes the root of a binary search tree and an integer k, and returns true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.
const findTarget = (root, k) => {
	// If root is null, return false
	if (!root) return false

	// Create a Set to store the values of the nodes we've visited.
	const set = new Set()

	// Create a stack and add the root to it.
	const stack = [root]

	// While the stack is not empty, continue popping nodes off the stack.
	while (stack.length) {
		// Pop the last node off the stack.
		const node = stack.pop()

		// If we've already seen a node with the value k - node.val, then return true.
		if (set.has(k - node.val)) return true

		// Add the current node's value to the set.
		set.add(node.val)

		// Add the left and right children of the current node to the stack.
		if (node.left) stack.push(node.left)
		if (node.right) stack.push(node.right)
	}

	// If we've searched the entire tree and haven't found a pair of nodes with a sum of k, return false.
	return false
}


console.log(`Given [5,3,6,2,4,null,7] and 9, the existence of two elements' sum being equal to the integer is : ${findTarget([5, 3, 6, 2, 4, null, 7], 9)}`); // true
console.log(`Given [5,3,6,2,4,null,7] and 28, the existence of two elements' sum being equal to the integer is : ${findTarget([5, 3, 6, 2, 4, null, 7], 28)}`); // false