/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

const findTarget = (root, k) => {
	if (root) {
		// declare variables
		const set = new Set()
		// to initialize truthy condition
		const stack = [root]

		while (stack.length) {
			const node = stack.pop()
			// target found
			if (set.has(k - node.val)) return true
			// else..
			set.add(node.val)
			if (node.left) stack.push(node.left)
			if (node.right) stack.push(node.right)
		}
	}

	// base case
	return false
}

console.log(`Given the binary search tree and integer, the existence of two elements' sum being equal to the integer is : ${findTarget([5, 3, 6, 2, 4, null, 7], 9)}`); // true
console.log(`Given the binary search tree and integer, the existence of two elements' sum being equal to the integer is : ${findTarget([5, 3, 6, 2, 4, null, 7], 28)}`); // false