// Runtime: 112ms
// Time complexity: O(n)
// Memory: 40.2MB
let firstUniqChar = (str) => {
	let char_count = {}

	for(let i = 0; i < str.length; i++) {
		char_count[str[i]] = char_count[str[i]] + 1 || 1
	}

	for (let j = 0; j < str.length; j++) {
		if (char_count[str[j]] === 1) {
			return j
		}
	}

	return -1;
}

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2