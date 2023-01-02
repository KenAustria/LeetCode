/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

const diameterOfBinaryTree = root => {
	// to keep track of the longest path we find from the DFS
	let diameter = 0
	longestPath(root)
	return diameter

	function longestPath(node) {
		if (node) {
			// recursively explore node's children
			const left = longestPath(node.left)
			const right = longestPath(node.right)

			// update diameter
			diameter = Math.max(diameter, left + right)
			/* return longer path between left or right
			add 1 as the edge connecting it with its parent*/
			return 1 + Math.max(left, right)
		}

		// base case, we've traversed to the end of the tree
		return 0
	}
}

console.log(`The diameter of [1,2,3,4,5] is ${diameterOfBinaryTree([1, 2, 3, 4, 5])}`); // 3
console.log(`The diameter of [1,2] is ${diameterOfBinaryTree([1, 2])}`); // 1