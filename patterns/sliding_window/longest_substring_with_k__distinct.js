/*
Time Complexity: O(N)
Space Complexity: O(K)
*/

const longest_substring_with_k_distinct = (str, k) => {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      // decrement the character’s frequency going out of the window
      charFrequency[leftChar] -= 1;
      // remove character from the HashMap if its frequency becomes zero
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      // shrink the window
      windowStart += 1;
    }

    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(
  `Length of the longest substring: ` +
    longest_substring_with_k_distinct('araaci', 2)
); // 4
console.log(
  `Length of the longest substring: ` +
    longest_substring_with_k_distinct('araaci', 1)
); // 2
console.log(
  `Length of the longest substring: ` +
    longest_substring_with_k_distinct('cbbebi', 3)
); // 5
