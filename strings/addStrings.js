// Runtime: 96ms
// Time complexity: O(max(N1,N2))
// Memory: 40.9MB
const addStrings = function(num1, num2) {
	let output_sum = ""
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;

	// since i and j are initiated from the end and carry has a value
  while ((i >= 0) || (j >= 0) || (carry > 0)) {
		// assure there are digits (i, j) to process;
		// assure same digit isn’t evaluated before ASCII conversion
		const digit1 = i < 0 ? 0 : num1.charAt(i--) - '0';
    const digit2 = j < 0 ? 0 : num2.charAt(j--) - '0';
    const digitsSum = digit1 + digit2 + carry;
    output_sum = `${digitsSum % 10}${output_sum}`;
    carry = Math.floor(digitsSum / 10);
  }

  return output_sum;
};

console.log(addStrings("1", "9")); // "10"
console.log(addStrings("8", "3")); // "11"
console.log(addStrings("8", "12")); // "20"
