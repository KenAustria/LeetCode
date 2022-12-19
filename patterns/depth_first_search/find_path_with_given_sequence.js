/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right
	}
}

const findPath = (root, sequence) => {
	// case: sequence is an empty array
	if (root === null) {
		return sequence.length === 0
	}

	return findPathWithGivenSequenceRecursive(root, sequence, 0)
}

const findPathWithGivenSequenceRecursive = (currentNode, sequence, sequenceIndex) => {
	if (currentNode === null) {
		return false
	}

	const seqLen = sequence.length
	// return false as soon as we find a mismatch between the sequence and the node value
	if (sequenceIndex >= seqLen || currentNode.val !== sequence[sequenceIndex]) {
		return false
	}

	// if currentNode is a leaf and it's the end of the sequence, we've found a path
	if ((currentNode.left === null) && (currentNode.right === null) && (sequenceIndex === seqLen - 1)) {
		return true
	}

	return findPathWithGivenSequenceRecursive(currentNode.left, sequence, sequenceIndex + 1) || findPathWithGivenSequenceRecursive(currentNode.right, sequence, sequenceIndex + 1)
}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${findPath(root, [1, 0, 7])}`); // false
console.log(`Tree has path sequence: ${findPath(root, [1, 1, 6])}`); // true