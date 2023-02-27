/*
    This is a JavaScript arrow function that calculates the maximum depth of a binary tree using breadth-first search. The function takes
the root node of the binary tree as input. It uses a queue to store the nodes of the tree and traverses the nodes level by level,
incrementing the depth by 1 for each level. The function returns the maximum depth of the tree.

    The function first checks if the root node is null or undefined. If so, it returns 0, because a tree with no nodes has a maximum depth
of 0.

    Next, the function creates a queue to store the nodes of the tree. It initializes the depth variable to 0, which will be used to keep
track of the maximum depth of the tree.

    Then, the function enters a while loop that continues as long as the queue is not empty. Inside the loop, the function increments the
depth variable by 1, because each level of the tree is one level deeper than the previous level.

    The function also stores the number of nodes at the current level in the levelSize variable. To keep track of the number of nodes at
the current level, we use the length of the queue. When we start processing the nodes at a new level, the length of the queue is equal to
the number of nodes at the previous level. 
    
    It then enters a for loop that traverses the nodes at the current level. Inside the for loop, the function removes the first node from
the queue using the shift() method.

    If the current node has a left child, the function adds it to the end of the queue using the push() method. If the current node has a
right child, the function adds it to the end of the queue as well.

    After the while loop completes, the function returns the maximum depth of the tree, which is stored in the depth variable.

Time = O(n), Space = O(w)
    The time complexity of the maxDepth function is O(n), where n is the number of nodes in the binary tree. This is because the
function traverses every node in the tree once using a breadth-first search algorithm. Specifically, it uses a queue to keep track of
the nodes to be processed, so each node is processed once and each edge is traversed once.

    The space complexity of the function is O(w), where w is the maximum width of the tree (i.e., the maximum number of nodes at any
level of the tree). This is because the function stores each level of the tree in the queue before moving on to the next level.Therefore, 
the maximum number of nodes that will be stored in the queue at any one time is the maximum number of nodes at any level of the tree.
This can be at most the number of nodes in the last level, which is at most (n + 1) / 2, where n is the total number of nodes in the tree.
*/

const maxDepth = root => {
    // If the root is null or undefined, the tree has no nodes, so return 0
    if (!root) return 0;
  
    // Create a queue to store the nodes of the tree
    // Stores only the root node of the tree at the beginning
    const queue = [root];
    
    // Initialize the depth to 0
    let depth = 0;
    
    // While the queue is not empty
    while (queue.length > 0) {
      // Increment the depth by 1 for each level of the tree
      depth++;
      
      // Store the number of nodes at the current level
      const levelSize = queue.length;
      
      // Traverse the nodes at the current level
      for (let i = 0; i < levelSize; i++) {
        // Remove the first node from the queue
        const node = queue.shift();
        
        // If the current node has a left child, add it to the end of the queue
        if (node.left) queue.push(node.left);
        
        // If the current node has a right child, add it to the end of the queue
        if (node.right) queue.push(node.right);
      }
    }
    
    // Return the maximum depth of the tree
    return depth;
  };
  