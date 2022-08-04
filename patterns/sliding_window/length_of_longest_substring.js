/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

const length_of_longest_substring = (arr, k) => {
  // declare variables
  let windowStart = 0,
    maxLength = 0,
    maxOnesCount = 0;

  // try to extend the range (windowStart, windowEnd)
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // if current element is a 1
    if (arr[windowEnd] === 1) {
      maxOnesCount += 1;
    }

    // shrink the window if the remaining 0s are more than "k"
    if (windowEnd - windowStart + 1 - maxOnesCount > k) {
      // don't include this element in maxOnesCount if remaining 0s exceed "k"
      if (arr[windowStart] === 1) {
        maxOnesCount -= 1;
      }
      // move on to next element
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6
console.log(
  length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
); // 9
