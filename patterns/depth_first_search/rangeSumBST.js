/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

const rangeSumBST = (root, low, high) => {
	// declare variable
	let sum = 0;

	// base case root has no value
	if (!root) return sum;

	// if node's value is within left range
	if (root.val > low) {
		sum += rangeSumBST(root.left, low, high);
	}
	// if node's value is within left and right range
	if (root.val <= high && root.val >= low) {
		sum += root.val;
	}
	// if node's value is within right range
	if (root.val < high) {
		sum += rangeSumBST(root.right, low, high);
	}

	// return result
	return sum;
};

// console.log(`The sum of the range between left and right is:  ${}`); // 32
console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15))