/*
   The function dfs is a recursive function that takes in the current node, the current sum, and the current path. The function first 
checks if the current node is null, and if so, returns immediately. Then, the function adds the current node's value to the sum and 
pushes it onto the path.

     If the current node is a leaf node (i.e., has no left or right children) and the current sum is equal to the target sum, the 
current path is added to the result.

    Next, the function makes recursive calls to traverse the left and right subtrees, passing in the updated sum and path. After both
 recursive calls are completed, the current node is popped off the path to backtrack and try other paths.

    Finally, the pathSum function calls dfs with the root node, an initial sum of 0, and an empty path. The result array is returned after all paths have been explored.

    Time = 0(n) , Space = O(n)
    The time complexity of this algorithm is O(n), where n is the number of nodes in the binary tree, since we visit each node exactly once.
The space complexity is also O(n), since the maximum number of paths we can store in the result array is equal to the number of leaf nodes
in the binary tree, which is at most n/2 in a balanced tree. The maximum depth of the call stack is also proportional to the height of the
binary tree, which is O(log n) for a balanced tree and O(n) for a skewed tree.
*/

// Define a function that takes in the root of a binary tree and a target sum, and returns all root-to-leaf paths where the sum of the node values in the path equals targetSum.
const pathSumII = (root, targetSum) => {
    const result = []; // An array to store the result paths
    
    // Define a depth-first search function to traverse the tree and find the targetSum paths
    const dfs = (node, sum, path) => {
      if (!node) return; // Base case: if the node is null, return
      
      path.push(node.val); // Add the current node value to the path
      sum += node.val; // Update the current sum
      
      // If the node is a leaf node and the sum equals targetSum, push the path to the result array
      if (!node.left && !node.right && sum === targetSum) {
        result.push([...path]);
      }
      
      // Traverse the left and right subtrees
      dfs(node.left, sum, path);
      dfs(node.right, sum, path);
      
      path.pop(); // Remove the current node value from the path to backtrack and continue searching other paths
    };
    
    // Call the depth-first search function on the root node with an initial sum of 0 and an empty path
    dfs(root, 0, []);
    
    return result; // Return the array of root-to-leaf paths
};
  