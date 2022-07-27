/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

const max_sub_array_of_size_k = (k, arr) => {
  // declare variables
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // accumulate window sum with the next element
    windowSum += arr[windowEnd];

    // slide the window, no need to slide if we've not hit the window size of 'k'
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      // subtract the element going out from window sum
      windowSum -= arr[windowStart];
      // slide the window ahead
      windowStart += 1;
    }
  }
  return maxSum;
};

/*
Brute Force
Time Complexity: O(N * K)
*/

// const max_sub_array_of_size_k = (k, arr) => {
//   // declare variables
//   let maxSum = 0,
//     windowSum = 0;

//   // iterate window
//   for (i = 0; i < arr.length - k + 1; i++) {
//     // reset window sum
//     windowSum = 0;

//     for (j = i; j < i + k; j++) {
//       // accumulate sum
//       windowSum += arr[j];
//     }

//     // assign maximum sum
//     maxSum = Math.max(maxSum, windowSum);
//   }
//   return maxSum;
// };

console.log(
  `Maximum sum of a subarray of size K: ` +
    max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])
); // 9
console.log(
  `Maximum sum of a subarray of size K: ` +
    max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])
); // 7
