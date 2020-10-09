// Runtime: 96ms
// Time complexity: O(n)
// Memory: 41.4MB
const lengthOfLongestSubstring = function(s) {
  let seen = new Map()
  let start = 0
  let max = 0

  for (let i = 0; i < s.length; i++) {
		// prevent dups, if the current char was seen, 
		// move the start to (1 + the last index of this char)
		if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
    seen.set(s[i], i)
    max = Math.max(i - start + 1, max)
  }

  return max
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0