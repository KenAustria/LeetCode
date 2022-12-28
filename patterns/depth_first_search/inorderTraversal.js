/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

const inorderTraversal = root => {
	const stack = []
	const result = []

	while (root || stack.length) {
		if (root) {
			stack.push(root)
			root = root.left
		} else {
			root = stack.pop()
			result.push(root.value)
			root = root.right
		}
	}

	return result
}

console.log(`The binary tree traversal of [1,null,2,3] is : ${inorderTraversal([1, null, 2, 3])}`); // [1,3,2]
console.log(`The binary tree traversal of [] is : ${inorderTraversal([])}`); // []
console.log(`The binary tree traversal of [1] is : ${inorderTraversal([1])}`); // [1]