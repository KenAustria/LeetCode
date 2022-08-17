/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

const make_squares = arr => {
	// declare variables
	const n = arr.length
	let squares = Array(n).fill(0)
	let highestSquareIdx = n - 1
	let left = 0,
		right = n - 1

	while (left <= right) {
		// square values
		let leftSquare = arr[left] * arr[left],
			rightSquare = arr[right] * arr[right]

		// whichever pointer gives us the bigger square
		if (leftSquare > rightSquare) {
			// ..add it to the result array
			squares[highestSquareIdx] = leftSquare
			// ..move to the next/previous number according to the pointer
			left += 1
		} else {
			squares[highestSquareIdx] = rightSquare
			right -= 1
		}
		highestSquareIdx -= 1
	}

	return squares
}

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`); // [0, 1, 4, 4, 9]
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`); // [0, 1, 1, 4, 9]