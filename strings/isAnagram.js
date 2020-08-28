// Runtime: 68ms
// Time complexity:
// Memory: 37.2MB
const isAnagram = (word1, word2) => {
	// host hash map
	const map = {};

	// populate hash map
	word1.split('').map(letter => map[letter] = map[letter] ? map[letter] + 1 : 1);
	// depopulate hash map
	word2.split('').map(letter => map[letter] = map[letter] ? map[letter] - 1 : -1);
	// checks every key's value to check if zero
	return Object.keys(map).every(letter => map[letter] === 0);
}

console.log(isAnagram(word1 = "rat", word2 = "car")); // false
console.log(isAnagram(word1 = "anagram", word2 = "nagaram")); // true