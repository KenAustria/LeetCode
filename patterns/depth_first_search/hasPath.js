// Time: O(n), Space: O(h)

// This function checks if there is a path from the root of a binary tree to a leaf node
// where the sum of node values along the path is equal to a given target sum
const hasPath = (root, sum) => {
	// If the root is null, there is no path, so return false
	if (!root) return false;

  
	// If the current node is a leaf node and its value is equal to the remaining sum,
	// we have found a path, so return true
	if ((root.left === null) && (root.right === null) && (root.val === sum)) {
	  return true;
	}
  
	// Otherwise, recursively check if there is a path in the left or right subtree
	// that sums to the remaining target sum after subtracting the current node's value
	return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val);
  };
  

console.log(`Tree has path: ${hasPath(root, 23)}`);
console.log(`Tree has path: ${hasPath(root, 16)}`);