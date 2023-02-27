/*
    This is a JavaScript function that takes the root node of a binary tree as input and inverts the tree in a breadth-first manner.
The function uses a queue to keep track of the nodes in the tree. This implementation uses a queue to store the nodes of the tree in
the order they need to be processed. This is the core idea of BFS. The while loop runs until there are no more nodes in the queue, 
and for each node, it swaps its left and right child nodes and adds them to the end of the queue if they exist. This ensures that 
the function processes all nodes at the same depth before moving on to nodes at the next depth.

    The function first checks if the root node is null, and if it is, it returns null, since there is no tree to invert. Otherwise,
it initializes a queue with the root node.

    Next, the function enters a while loop that runs as long as there are nodes in the queue. In each iteration of the loop, the function
removes the first node in the queue using the shift() method and stores it in the node variable. It then swaps the left and right child
nodes of the current node by storing the value of node.left in a temporary variable temp, setting node.left to node.right, and setting 
node.right to temp.

    If the current node has a left child, the function adds it to the end of the queue using the push() method. If the current node has a
right child, the function adds it to the end of the queue as well. This ensures that the function processes all the nodes at the current
depth before moving on to the nodes at the next depth.

    Once all the nodes have been processed, the function returns the root node of the inverted tree.

    In summary, this function performs a breadth-first search of the binary tree, inverts the tree by swapping the left and right child
nodes at each level, and returns the root node of the inverted tree.

Time = O(n), Space = O(w) 
    The time complexity of the invertTree function is O(n), where n is the number of nodes in the binary tree. This is because the function
processes each node in the tree once, and the number of nodes in a binary tree is proportional to n.

    The while loop that performs the BFS traversal executes n times, since it processes each node in the tree exactly once. The operations
inside the while loop take constant time, so the overall time complexity of the function is O(n).

    The space complexity of the invertTree function is O(w), where w is the maximum width of the binary tree. This is because the function
uses a queue to store the nodes at each level of the tree, and the maximum number of nodes that can be present at any level is equal to the
width of the tree. The space required to store the queue at each level is proportional to the number of nodes at that level, so the overall
space complexity of the function is proportional to the maximum number of nodes at any level, which is the width of the tree.

    In the worst case, when the binary tree is completely unbalanced and resembles a linked list, the width of the tree is equal to the
number of nodes, so the space complexity of the function becomes O(n). However, in a balanced binary tree, the width is proportional to the
square root of the number of nodes, so the space complexity of the function becomes O(sqrt(n)).
*/

// Define a function that takes a binary tree as input and inverts it
const invertTree = root => {
    // If the root is null or undefined, there's nothing to invert, so return null
    if (!root) return null;
    
    // Create a queue to store the nodes of the tree
    const queue = [root];
    
    // While the queue is not empty
    while (queue.length > 0) {
      // Remove the first node from the queue
      const node = queue.shift();
      
      // Swap the left and right child nodes of the current node
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      
      // If the current node has a left child, add it to the end of the queue
      if (node.left) queue.push(node.left);
      
      // If the current node has a right child, add it to the end of the queue
      if (node.right) queue.push(node.right);
    }
    
    // Return the root of the inverted tree
    return root;
};
