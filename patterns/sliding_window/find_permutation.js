/*
Time Complexity: O(N+M)
Space Complexity: O(M)
*/

const find_permutation = (str, pattern) => {
	// declare variables
	let windowStart = 0,
		matched = 0,
		charFrequency = {};

	// populate hash frequency
	for (let i = 0; i < pattern.length; i++) {
		const chr = pattern[i];
		if (!(chr in charFrequency)) {
			charFrequency[chr] = 0;
		}
		charFrequency[chr] += 1;
	}

	// Our goal is to match all the characters from the 'charFrequency' with the current
	// window try to extend the range [windowStart, windowEnd]
	for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const rightChar = str[windowEnd];
		if (rightChar in charFrequency) {
			// decrement the frequency of matched character
			charFrequency[rightChar] -= 1;
			if (charFrequency[rightChar] === 0) {
				matched += 1;
			}
		}

		// if the character frequency becomes zero, we got a complete match.
		if (matched === Object.keys(charFrequency).length) {
			return true;
		}

		// shrink the sliding window
		if (windowEnd >= pattern.length - 1) {
			leftChar = str[windowStart];
			windowStart += 1;
			if (leftChar in charFrequency) {
				if (charFrequency[leftChar] === 0) {
					matched -= 1;
				}
				charFrequency[leftChar] += 1;
			}
		}
	}

	return false;
}


console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`); // true
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`); // false
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`); // true
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`); // true
