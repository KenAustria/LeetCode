// Runtime: 68ms
// Time complexity: O(1)
// Memory: 34MB
const isValidParenthesis = s => {
	// edge cases, no odd length array will result in true
	if (s.length === 0) return true
	if (s.length === 1) return false
	if (s.length % 2 !== 0) return false

	// reversed dictionary key/values to use stack
	// standard dictionary key/values would use a queue
	const dictionary = {
		'}': '{',
		')': '(',
		']': '['
	}
	const stack = []

	for (let i = 0; i < s.length; i++) {
		const currChar = s[i]
		const lastChar = stack[stack.length - 1]
		const delChar = dictionary[currChar]

		if (delChar) {
			// encounter a char that can't pop from the stack, immediately break from the loop and return false
			if (delChar === lastChar) {
				stack.pop()
			} else {
				return false
			}
		} else {
			stack.push(currChar)
		}
	}

	// turn the value into a boolean data type while also flipping the result
	return !stack.length
}

console.log(isValidParenthesis('()')); // true
console.log(isValidParenthesis('(){}[]')); // true
console.log(isValidParenthesis('(]')); // false
console.log(isValidParenthesis('([)]')); // false
console.log(isValidParenthesis('{[]}')); // true
console.log(isValidParenthesis('{ { ( { } ) } }')); // false