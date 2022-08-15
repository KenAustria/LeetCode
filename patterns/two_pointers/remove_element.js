/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

const remove_element = arr => {
	let nextNonDuplicate = 1

	let i = 0
	while (i < arr.length) {
		if (arr[nextNonDuplicate - 1] !== arr[i]) {
			arr[nextNonDuplicate] = arr[i]
			nextNonDuplicate += 1
		}
		i += 1
	}

	return nextNonDuplicate
}

console.log(remove_element([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(remove_element([2, 2, 2, 11])); // 2