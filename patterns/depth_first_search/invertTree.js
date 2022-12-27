/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

const invertTree = root => {
	// base case
	if (root != null) {
		// recursive call for left subtree
		invertTree(root.left)
		// recursive call for right subtree
		invertTree(root.right)

		// swap
		let temp = root.left
		root.left = root.right
		root.right = temp
	}

	return root
}

console.log(`The inverted tree changes from [4,2,7,1,3,6,9] to : ${invertTree([4, 2, 7, 1, 3, 6, 9])}`); // [4,7,2,9,6,3,1]
console.log(`The inverted tree changes from [2,1,3] to : ${invertTree([2, 1, 3])}`); // [2,3,1]
console.log(`The inverted tree changes from [] to : ${invertTree([])}`); // []