/*
    This is a JavaScript function that takes a binary tree represented by its root node as input, and returns an array of arrays
representing the level order traversal of the tree.

    The function first checks if the root is null. If so, it returns an empty array. Otherwise, it initializes two arrays: result to
store the final result, and queue to store nodes at each level of the tree.

    It then enters a while loop that will continue until the queue is empty. Within this loop, it first initializes an empty level array
to store nodes at the current level, and a size variable to keep track of the number of nodes in the current level.

    It then enters a for loop that will loop size times. Within this loop, it removes the first node from the queue, adds its value to the
level array, and pushes any non-null children of the node to the queue.

    After the for loop, the level array is pushed onto the result array. The while loop then continues until there are no more nodes in the
queue.

    Finally, the function returns the result array, which contains the level order traversal of the binary tree.

    Time = O(n), Space = O(n)
    The time complexity of this solution is O(N), where N is the number of nodes in the binary tree. This is because the solution traverses
each node in the tree exactly once.

    The space complexity of this solution is also O(N), where N is the maximum number of nodes in a single level of the binary tree. In the
worst case, all nodes in a single level of the binary tree will be stored in the queue, which can be as large as N/2. Therefore, the space
complexity of the solution is O(N).
*/

// Check if the tree is empty, return an empty array if it is
// Initialize an empty array to store the traversal result
// Initialize a queue and add the root to it

const levelOrder = (root) => {
    if (!root) return [];

    // queue => level => result
    const result = [];
    const queue = [root];
  
    // Iterate through the queue while it's not empty
    while (queue.length > 0) {
      // Initialize an empty array to store the current level nodes
      // Get the current size of the queue
      const level = [];
      const size = queue.length;
  
      // Iterate through the current level nodes
      for (let i = 0; i < size; i++) {
        // Pop the first node from the queue
        // Add its value to the current level array
        // If the node has left or right child, add them to the queue
        const node = queue.shift();
        level.push(node.val);
  
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
  
      // Add the current level array to the result array
      result.push(level);
    }
  
    // Return the level order traversal result
    return result;
  };
  