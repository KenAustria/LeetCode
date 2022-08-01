/*
Time Complexity: O(N)
Space Complexity: O(K)
*/

const fruits_into_baskets = fruits => {
  // declare variables
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  // extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    // if rightChar is not in charFrequency HashMap, set count to zero
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    // otherwise increment count
    fruitFrequency[rightFruit] += 1;

    // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      // decrement the character’s frequency going out of the window
      fruitFrequency[leftFruit] -= 1;
      // remove character from the HashMap if its frequency becomes zero
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
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
  `Maximum number of fruits: ` + fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])
); // 3
console.log(
  `Maximum number of fruits: ` +
    fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])
); // 5
