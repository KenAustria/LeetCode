// Runtime: 72ms
// Memory: 38.6MB
// Time Complexity: O(n)
// Space Complexity: O(n)

const numIdenticalPairs = nums => {
  let goodPairsHash = {};
  let count = 0;

  for (let num of nums) {
    if (goodPairsHash[num]) {
      count += goodPairsHash[num];
      goodPairsHash[num] += 1;
    } else {
      goodPairsHash[num] = 1;
    }
  }

  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0
