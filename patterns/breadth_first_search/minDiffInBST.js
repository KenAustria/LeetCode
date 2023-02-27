/*
    This is a JavaScript function that takes a binary search tree (BST) root node as input and returns the minimum difference between any
two different nodes in the tree.

    To find the minimum difference, the function first initializes a variable minDiff to Infinity and a variable prevNode to null. It then
defines a helper function called inorderTraversal that performs an in-order traversal of the BST.

    During the in-order traversal, the function first recursively traverses the left subtree of the current node. When it reaches a node,
it checks if there is a prevNode (i.e., the previously visited node). If there is, it updates minDiff to be the minimum of its current
value and the absolute difference between the values of the current node and prevNode.

    After updating minDiff, the function sets prevNode to the current node and recursively traverses the right subtree.

    Once the in-order traversal is complete, the function returns the final value of minDiff.

    The in-order traversal of a BST visits all nodes in ascending order of their values. Therefore, finding the minimum difference between
any two nodes requires comparing adjacent nodes visited during the in-order traversal. The function achieves this by keeping track of the previously visited node (prevNode) and updating the minimum difference (minDiff) accordingly.

    Note that the function assumes that the input is a valid BST, i.e., all left child nodes have values less than their parent node, and
all right child nodes have values greater than their parent node.

Time = O(n) , Space = O(n)
    The time complexity of this solution is O(n), where n is the number of nodes in the binary search tree. The function performs an
in-order traversal of the binary search tree, visiting each node once.

    The space complexity of this solution is also O(n), function uses three variables: minDiff, prevNode, and inorderTraversal. The
minDiff and prevNode variables each take up constant space, while the inorderTraversal function takes up space proportional to the height
of the tree. In the worst case, if the tree is completely unbalanced, the height of the tree can be n-1, where n is the number of nodes in
the tree. Therefore, the space complexity of the function is O(n) in the worst case, and O(h) in the best case, where h is the height of
the tree.
*/

const minDiffInBST = (root) => {
    // Initialize minimum difference to infinity
    let minDiff = Infinity;
    // Initialize previous node to null
    let prevNode = null;
  
    // Define a helper function to perform in-order traversal of the BST
    const inorderTraversal = (node) => {
      // If the current node is null, return
      if (node === null) {
        return;
      }
      // Traverse the left subtree
      inorderTraversal(node.left);
      // If previous node exists, update the minimum difference
      if (prevNode !== null) {
        minDiff = Math.min(minDiff, node.val - prevNode.val);
      }
      // Set previous node to the current node
      prevNode = node;
      // Traverse the right subtree
      inorderTraversal(node.right);
    };
  
    // Start in-order traversal of the BST from the root node
    inorderTraversal(root);
  
    // Return the minimum difference between any two different nodes
    return minDiff;
};
  
  