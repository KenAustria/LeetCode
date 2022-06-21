/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

const smallest_subarray_sum = (s, arr) => {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element
    windowSum += arr[windowEnd];

    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  // no such subarray exists
  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
};

console.log(
  `Smallest subarray length: ` + smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])
); // 2
console.log(
  `Smallest subarray length: ` + smallest_subarray_sum(7, [2, 1, 5, 2, 8])
); // 1
console.log(
  `Smallest subarray length: ` + smallest_subarray_sum(8, [3, 4, 1, 1, 6])
); // 3
