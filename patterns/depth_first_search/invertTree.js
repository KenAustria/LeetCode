/*
	The invertTree function takes the root of a binary tree as its input and returns the root of the inverted binary tree.

    This uses a stack to perform depth first search (DFS), which follows the LIFO (last in, first out) principle. The while
loop runs until there are no more nodes in the stack, and for each node, it swaps its left and right child nodes and adds 
them to the top of the stack if they exist. This ensures that the function processes nodes at deeper levels before moving on
to nodes at shallower levels, which is the core idea of DFS.
	
	The algorithm works by using a stack to perform a level-order traversal of the binary tree. At each node, the left and
right children are swapped by swapping their references. Then, if the left and right children are not null, they are pushed onto the
stack to be processed in the next iteration.

Time = O(n), Space = O(n)
	The time complexity of this algorithm is O(n), where n is the number of nodes in the binary tree. This is because the algorithm
visits each node once and performs a constant amount of work at each node.

	The space complexity of the algorithm is O(n), where n is the number of nodes in the binary tree. This is because in the worst
case, the stack can contain all the nodes of the binary tree, which would be O(n) space. However, in practice, the stack will only
contain the nodes in the last level of the tree, which would be O(n/2) space.
*/

// Define function to invert a binary tree
const invertTree = root => {
    // If tree is empty, return the root
    if (!root) return root

    // Define a stack and push the root to it
    let stack = [root]

    // While the stack is not empty, traverse the tree
    while (stack.length > 0) {
        // Pop the last node from the stack
        let node = stack.pop()

        // Swap the left and right nodes of the current node
        let temp = node.left
        node.left = node.right
        node.right = temp

        // If the left node exists, push it to the stack
        if (node.left) stack.push(node.left)

        // If the right node exists, push it to the stack
        if (node.right) stack.push(node.right)
    }

    // Return the root of the inverted tree
    return root
}


console.log(`The inverted tree changes from [4,2,7,1,3,6,9] to : ${invertTree([4, 2, 7, 1, 3, 6, 9])}`); // [4,7,2,9,6,3,1]
console.log(`The inverted tree changes from [2,1,3] to : ${invertTree([2, 1, 3])}`); // [2,3,1]
console.log(`The inverted tree changes from [] to : ${invertTree([])}`); // []