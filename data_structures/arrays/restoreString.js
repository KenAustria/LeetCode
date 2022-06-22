// Runtime: 76ms
// Memory: 40.8MB
// Time Complexity: O(n)
// Space Complexity: O(n)

const restoreString = (str, indicesArr) => {
	const result = []

	for ( let i = 0; i < indicesArr.length; i++) {
		result[indicesArr[i]] = str[i]
	}

	return result.join("")
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3])); // "leetcode"
console.log(restoreString("abc", [0,1,2])); // "abc"
console.log(restoreString("aiohn", [3,1,4,2,0])); // "nihao"
console.log(restoreString("aaiougrt", [4,0,2,6,7,3,1,5])); // "arigatou"
console.log(restoreString("art", [1,0,2])); // "rat"
