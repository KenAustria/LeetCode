// Runtime: 82ms
// Time complexity: O(n)
// Memory: 41.2MB
const fizzBuzz = (n) => {
	let strArr = []

	for (let i = 1; i <= n; i++) {
		if ((i/3 === 0) && (i/5 === 0)) {
			strArr.push("FizzBuzz")
		} else if (i % 5 === 0) {
			strArr.push("Buzz")
		} else if (i % 3 === 0) {
			strArr.push("Fizz")
		} else {
			strArr.push(String(i))
		}
	}

	return strArr;
}
