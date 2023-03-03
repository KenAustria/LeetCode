/*
BFS
    This is a JavaScript arrow function that calculates the maximum depth of a binary tree using breadth-first search. The function takes
the root node of the binary tree as input. It uses a queue to store the nodes of the tree and traverses the nodes level by level,
incrementing the depth by 1 for each level. The function returns the maximum depth of the tree.

    The function first checks if the root node is null or undefined. If so, it returns 0, because a tree with no nodes has a maximum depth
of 0. Next, the function creates a queue to store the nodes of the tree. It initializes the depth variable to 0, which will be used to keep
track of the maximum depth of the tree. Then, the function enters a while loop that continues as long as the queue is not empty. Inside the loop, the function increments the
depth variable by 1, because each level of the tree is one level deeper than the previous level.

    The function also stores the number of nodes at the current level in the levelSize variable. To keep track of the number of nodes at
the current level, we use the length of the queue. When we start processing the nodes at a new level, the length of the queue is equal to
the number of nodes at the previous level. 
    
    It then enters a for loop that traverses the nodes at the current level. Inside the for loop, the function removes the first node from
the queue using the shift() method. If the current node has a left child, the function adds it to the end of the queue using the push() method. If the current node has a
right child, the function adds it to the end of the queue as well. After the while loop completes, the function returns the maximum depth
of the tree, which is stored in the depth variable.

    This is breadth first search because it traverses the tree level by level, starting from the root node. It does this by using a queue
to store the nodes of the tree. The algorithm begins by adding the root node to the queue. Then it enters a while loop that continues as
long as there are nodes in the queue. Within the loop, it increments the depth by 1 for each level of the tree, and stores the number of
nodes at the current level. It then traverses the nodes at the current level by removing the first node from the queue, and adding its
left and right children to the end of the queue if they exist. By processing the nodes in this manner, the algorithm guarantees that it
processes all the nodes at one level before moving on to the next level, ensuring that the depth of the tree is calculated correctly. 
Finally, the algorithm returns the maximum depth of the tree.

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

// --------------------------------------------------------------------------------------------------------------------

/*
DFS
    This is an example of a recursive depth-first search approach to finding the maximum depth of a binary tree. The function maxDepth
takes in the root node of the tree and returns an integer representing the maximum depth of the tree.

    The base case of the recursion is when the root node is null or undefined, in which case the tree has no nodes and its maximum depth
is 0. Otherwise, the function recursively calls itself on the left and right subtrees of the current root node, and returns the maximum
depth of those subtrees plus 1 (to account for the current node). The Math.max function is used to determine the larger of the two depths.

    The function works by traversing down the left and right subtrees of the tree as far as possible before computing the maximum depth. 
It starts with the root node and recursively traverses the left and right subtrees until it reaches the leaf nodes at the bottom of the
tree. The function then backtracks up the tree and computes the maximum depth of each subtree along the way, eventually returning the
maximum depth of the entire tree. This is the characteristic behavior of a depth-first search.

Time: O(n), Space: O(n)
    The time complexity of this solution is O(n), where n is the number of nodes in the binary tree, because it visits each node once.
    
    The space complexity of this solution is O(h), where h is the height of the binary tree, because the function calls itself 
recursively for each child node until it reaches a leaf node. Since the maximum number of function calls on the call stack at any given
time is equal to the height of the binary tree, the space complexity is O(h).
*/

const maxDepth = root => root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0