// Runtime: 80ms
// Time Complexity: O(n)
// Space Complexity:
// Memory: 37.7MB

const isPalindrome = str => {
  if (str.length == 0) return true;
  let newStr = str.replace(/\W/g, '').toLowerCase();

  let i = 0;
  let j = newStr.length - 1;

  while (i < j) {
    if (newStr[i] != newStr[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

// Runtime: 88ms
// Time complexity: O(n)
// Memory: 39.4MB
// const isPalindrome = (str) => {
// 	if (str.length == 0 ) return true;

// 	// remove any non-char and empty spaces
// 	let newStr = str.replace(/\W/g, '').toLowerCase();
// 	// reverse string
// 	let reversedStr = newStr.split('').reverse().join('');

// 	return newStr == reversedStr
// }

console.log(isPalindrome('')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
