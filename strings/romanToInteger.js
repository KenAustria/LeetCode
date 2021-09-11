// Runtime: 157ms
// Time complexity: O(n)
// Memory: 45.3MB

const romanToInt = (s) => {
	let result = 0
	let symbols = {
			"I": 1,
			"V": 5,
			"X": 10,
			"L": 50,
			"C": 100,
			"D": 500,
			"M": 1000
	};

	for (let i = 0; i < s.length; i++) {
			symbols[s[i]] < symbols[s[i+1]] ? result -= symbols[s[i]] : result += symbols[s[i]]
	}

	return result
};