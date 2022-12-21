/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

class TreeNode {
	constructor(val, left, right) {
		this.val = (val === undefined ? 0 : val);
		this.left = (left === undefined ? null : left);
		this.right = (right === undefined ? null : right)
	}
}

const rangeSumBST = (root, low, high) => {
	// declare variable
	let sum = 0;

	// case root has no value
	if (root == null) {
		return sum;
	}

	// if node's value is within left range
	if (root.val > low) {
		sum += rangeSumBST(root.left, low, high);
	}

	// if node's value is within left and right range
	if ((root.value <= high) && (root.value >= low)) {
		sum += root.value
	}

	// if node's value is within right range
	if (root.value < high) {
		sum += rangeSumBST(root.right, low, high)
	}

	// return result
	return sum
}

console.log(`The sum of the range between left and right is:  ${rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15)}`); // 32