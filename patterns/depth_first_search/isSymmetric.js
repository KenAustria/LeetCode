/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

const isSymmetric = root => {
	// base case
	if (!root) return true
	// recursive fn
	return isMirror(root.left, root.right)
}

const isMirror = (leftRoot, rightRoot) => {
	// if exactly one root node is null, return false
	if ((!leftRoot && rightRoot) || (!rightRoot && leftRoot)) return false
	// if node values don't match
	if ((leftRoot && rightRoot) && (leftRoot.val !== rightRoot.val)) return false

	if (leftRoot && rightRoot) {
		// symmetric traversal check
		return isMirror(leftRoot.left, rightRoot.right) && isMirror(leftRoot.right, rightRoot.left)
	}

	// if both nodes are null pointers
	if (!leftRoot && !rightRoot) return true
}

console.log(`The root of [1,2,2,3,4,4,3] is a mirror of itself : ${isSymmetric([3, 9, 20, null, null, 15, 7])}`); // true
console.log(`The root of [1,2,2,null,3,null,3] is a mirror of itself : ${isSymmetric([1, 2, 2, null, 3, null, 3])}`); // false