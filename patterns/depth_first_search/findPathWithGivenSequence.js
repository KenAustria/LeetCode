/* 
	This algorithm is used to determine whether a given sequence of numbers can be found in a binary tree.
The function findPath is called with a binary tree root node and a sequence of numbers. If the root is
null, it means that the tree is empty, and the function checks whether the sequence is also empty. If
so, it returns true. Otherwise, it means the tree is not empty, and the function findPathWithGivenSequence
is called with the root, the sequence, and an index of 0.

	The function findPathWithGivenSequence is a recursive function that checks whether the given sequence can
be found starting from the current node in the tree. The function first checks if the current node is null.
If so, it means that the end of the tree has been reached without finding the sequence, and it returns false.
If the current node is not null, it checks whether the current node's value matches the value in the sequence
at the current index. If not, it means that the sequence is not found in the current path, and it returns false.
If the current node is a leaf node (i.e., it has no left or right child), and the current index is the last index
of the sequence, it means that the sequence has been found, and it returns true. If none of these conditions is met,
the function recursively calls itself with the left and right child nodes and the incremented sequence index, checking
if the sequence can be found in either the left or the right subtree.

The algorithm returns true if the sequence is found in the tree starting from the root, and false otherwise.

Time: O(n), Space: O(h)

	The time complexity of this algorithm is O(N), where N is the number of nodes in the binary tree. This is because we visit
each node in the worst case. Specifically, we need to visit every node in the worst case to check if the sequence exists or not.

	The space complexity of this algorithm is O(h), where h is the height of the binary tree. This is because the maximum number
of nodes that can be present in the recursion stack is equal to the height of the binary tree. The space complexity could be worse
in the case of a skewed tree (when all nodes have only one child), where the height of the tree is equal to N, the number of nodes.
*/

const findPath = (root, sequence) => {
	// base case: empty tree
	if (!root) {
	  // return true if sequence is also empty
	  return sequence.length === 0;
	}
  
	// recursively check for sequence in the tree
	return findPathWithGivenSequence(root, sequence, 0);
};
  
const findPathWithGivenSequence = (currentNode, sequence, sequenceIndex) => {
	// base case: reached end of tree without finding sequence
	if (!currentNode) return false;
  
	const seqLen = sequence.length;
	/* sequence index out of range: current node does not match the current value in the sequence or when the
	   current node has no left or right child and the current index is not at the end of the sequence */
	// sequence mismatch: value in the tree doesn't match with the corresponding value in the given sequence
	if (
	  sequenceIndex >= seqLen || // sequence index out of range
	  currentNode.val !== sequence[sequenceIndex] // sequence mismatch
	) {
	  return false; // sequence not found, backtrack
	}
	if (
	  !currentNode.left &&
	  !currentNode.right &&
	  sequenceIndex === seqLen - 1
	) {
	  return true; // sequence found
	}
  
	// check for sequence in left and right subtrees
	return (
	  findPathWithGivenSequence(
		currentNode.left,
		sequence,
		sequenceIndex + 1
	  ) ||
	  findPathWithGivenSequence(
		currentNode.right,
		sequence,
		sequenceIndex + 1
	  )
	);
};
  

console.log(`Tree has path sequence: ${findPath([1, 7, 9, 2, 9], [1, 9, 9])}`); // true
console.log(`Tree has path sequence: ${findPath([1, 0, 1, 1, 6, 5], [1, 0, 7])}`); // false
console.log(`Tree has path sequence: ${findPath([1, 0, 1, 1, 6, 5], [1, 1, 6])}`); // true