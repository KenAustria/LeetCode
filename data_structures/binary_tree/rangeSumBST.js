/*
    The rangeSumBST function calculates the sum of the node values in a binary search tree that fall within a certain range.

    It first initializes a variable called sum to 0. It then defines a helper function called dfs that takes a node as an argument.
dfs checks if the node is null. If it is, the function simply returns.

    If the node value is within the range [low, high], the function adds the node's value to the sum. The function then explores the
right subtree if the node value is less than high and explores the left subtree if the node value is greater than low.

    Finally, dfs is called with the root node, and the function returns the sum of all the node values that fall within the range.

Time = O(n), Space = O(h)
    The time complexity of this solution is O(n), where n is the number of nodes in the tree. This is because the solution performs a
depth-first search (DFS) of the tree, visiting each node exactly once. The time complexity of a DFS traversal of a binary tree is O(n),
as each node is visited exactly once.
    The space complexity of this solution is O(h), where h is the height of the tree. This is because the space used by the call stack
during the DFS traversal is proportional to the height of the tree. In the worst case, where the tree is a skewed tree (i.e., all nodes
are in a single chain), the height of the tree is O(n), and the space complexity is also O(n). However, in the average case, the height
of the tree is O(log n) for a balanced binary search tree, and the space complexity is also O(log n).
*/

const rangeSumBST = (root, low, high) => {
    // Initialize the sum to 0
    let sum = 0;
  
    // Define a helper function to perform the DFS
    const dfs = node => {
      // If the node is null, return
      if (!node) return;
  
      // If the node value is within the range [low, high], add it to the sum
      if (node.val >= low && node.val <= high) {
        sum += node.val;
      }
  
      // If the node value is less than the range [low, high], explore the right subtree
      if (node.val < high) {
        dfs(node.right);
      }
  
      // If the node value is greater than the range [low, high], explore the left subtree
      if (node.val > low) {
        dfs(node.left);
      }
    };
  
    // Call the DFS helper function starting from the root
    dfs(root);
  
    // Return the sum
    return sum;
  };
  