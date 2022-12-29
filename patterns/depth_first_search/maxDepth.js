/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

const maxDepth = root => {
	if (root === undefined || root === null) {
		return 0
	}

	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

console.log(`The max depth of [3,9,20,null,null,15,7] is : ${maxDepth([3, 9, 20, null, null, 15, 7])}`); // 3
console.log(`The max depth of [1,null,2] is : ${maxDepth([1, null, 2])}`); // 2