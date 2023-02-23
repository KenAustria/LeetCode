
/* This algorithm traverses a binary tree and calculates the sum of all the root-to-leaf paths. 
   Each path represents a sequence of digits, and the algorithm calculates the sum of all possible path numbers. 
   For example, if the path from the root to a leaf node is 1 → 2 → 3, then the path number is 123. */

// Time: O(n), Space: O(h)

/* To optimize the algorithm for time complexity, we can use recursion to traverse the binary tree in a 
   depth-first manner. We pass the sum of the path found so far and the current node to a helper function that
   recursively traverses the left and right sub-trees of the current node. When the function reaches a leaf node,
   it returns the sum of the path from the root to that leaf. */

/* To optimize the algorithm for space complexity, we don't need to store an array or list to keep track of the 
   current path. Instead, we can keep track of the sum of the path found so far by multiplying it by 10 and adding
   the current node value. */

   /* The code multiplies the sum of the path by 10 because the position of the digit in the number determines the
      magnitude of its value. In base 10 (decimal), each position represents a power of 10, with the rightmost position
	  having a value of 1, the next position to the left having a value of 10, the one to the left of that having a value
	  of 100, and so on.
      For example, the number 4321 represents 4 thousands + 3 hundreds + 2 tens + 1 one, or (4 * 1000) + (3 * 100) + (2 * 10) + (1 * 1) = 4000 + 300 + 20 + 1 = 4321.
      By multiplying the current path sum by 10 and adding the current node value, we can construct the full number that
	  represents the path from the root to the current node. For example, if the current path sum is 42 and the current
	  node value is 3, we can construct the number 423, which represents the path from the root to the current node. */

const find_sum_of_path_numbers = root => {
	// Call the recursive helper function starting from the root and with an initial path sum of 0
	return find_root_to_leaf_path_numbers(root, 0);
}
  
const find_root_to_leaf_path_numbers = (currentNode, pathSum) => {
	// If the current node is null, return 0 to terminate the recursion
	if (!currentNode) return 0;

	// Update the path sum with the value of the current node
	pathSum = 10 * pathSum + currentNode.val;

	// If the current node is a leaf, return the sum of the path from the root to this leaf
	if (currentNode.left === null && currentNode.right === null) return pathSum;

	// Recursively traverse the left and right sub-trees with the updated path sum
	return find_root_to_leaf_path_numbers(currentNode.left, pathSum) + 
	find_root_to_leaf_path_numbers(currentNode.right, pathSum);
}
  
console.log(`The sume of the path numbers is ${find_sum_of_path_numbers([1, 7, 9, 2, 9])}`); // 408
console.log(`The sume of the path numbers is ${find_sum_of_path_numbers([1, 0, 1, 1, 6, 5])}`); // 332