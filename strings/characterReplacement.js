// Runtime: ms
// Time complexity:
// Memory: MB
var characterReplacement = function(s, k) {
	let left = 0, right = 0, max = 0, mostFreq = 0;
	let freqHash = {};

	for (let i = 0; i < s.length; i++) {
			freqHash[s[i]] = freqHash[s[i]] + 1 || 1;
			mostFreq = Math.max(mostFreq, freqHash[s[i]]);
			while(i - left + 1 - mostFreq > k) {
					freqHash[s[left]]-=1;
					left++;
			}
			max = Math.max(max, i - left + 1);
	}

	return max;
};

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4