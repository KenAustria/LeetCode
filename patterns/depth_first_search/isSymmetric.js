/*
	The isSymmetric function takes the root of a binary tree as an argument and checks whether it is symmetric or not. If the root node
is null, the function returns true. If the root node exists, it calls the isMirror function, passing in the left and right subtrees of
the root node.

	The isMirror function takes two nodes, leftRoot and rightRoot, as arguments and checks if they are mirrors of each other. If either
leftRoot or rightRoot is null and the other is not, the function returns false. If both are not null and have different values, the
function returns false.

	If both nodes have the same value and are not null, the function calls itself recursively with leftRoot.left and rightRoot.right,
and with leftRoot.right and rightRoot.left. If both of these recursive calls return true, then the function returns true. If either of
the recursive calls returns false, the function returns false.

If both leftRoot and rightRoot are null, the function returns true. 

Time = O(n), Space = O(n)
	The time complexity of this solution is O(n), where n is the number of nodes in the binary tree. We visit each node in the tree once,
and the time it takes to check if two nodes are mirrors of each other is constant.

	The space complexity is O(h), where h is the height of the tree. In the worst case, the function will recursively call itself h times
on the left branch and h times on the right branch before returning. This means that the maximum space used on the call stack at any given
time will be O(h).
*/

// This function takes the root of a binary tree and checks whether it is a mirror of itself
const isSymmetric = root => {
	// If the root is not null, we call the isMirror function and pass in the left and right subtrees of the root
	if (root) return isMirror(root.left, root.right)
	
	// If the root is null, it is symmetric by default
	return true
}

// This function takes in two nodes and returns true if they are mirrors of each other
const isMirror = (leftRoot, rightRoot) => {
	// If one of the nodes is null and the other is not, they are not mirrors of each other
	if ((!leftRoot && rightRoot) || (!rightRoot && leftRoot)) return false
	
	// If the values of the nodes are not equal, they are not mirrors of each other
	if ((leftRoot && rightRoot) && (leftRoot.val !== rightRoot.val)) return false
	
	// Recursively call isMirror with the left subtree of the left node and the right subtree of the right node,
	// and with the right subtree of the left node and the left subtree of the right node
	if (leftRoot && rightRoot) return isMirror(leftRoot.left, rightRoot.right) && isMirror(leftRoot.right, rightRoot.left)
	
	// If both nodes are null, they are mirrors of each other
	if (!leftRoot && !rightRoot) return true
}


console.log(`The root of [1,2,2,3,4,4,3] is a mirror of itself : ${isSymmetric([3, 9, 20, null, null, 15, 7])}`); // true
console.log(`The root of [1,2,2,null,3,null,3] is a mirror of itself : ${isSymmetric([1, 2, 2, null, 3, null, 3])}`); // false