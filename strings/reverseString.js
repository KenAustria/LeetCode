// Runtime: 98ms
// Time complexity: O(1)
// Memory: 42.7MB
let reverseStrArr = strArr => {
	for (let i = 0; i < strArr.length/2; i++) {
		let temp = strArr[i]
		strArr[i] = strArr[strArr.length - 1 - i]
		strArr[strArr.length - 1 - i] = temp;
	}
	return strArr;
}

console.log(reverseStrArr(["h", "e", "l", "l", "o"])); // ["o", "l", "l", "e", "h"]
console.log(reverseStrArr(["H", "a", "n", "n", "a", "h"])); // ["h", "a", "n", "n", "a", "H"]