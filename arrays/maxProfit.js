// Runtime: 72ms
// Time complexity: O(n)
// Space Complexity: O(1)
// Memory: 35.4MB
const maxProfit = prices => {
  let max = 0;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      max = Math.max(max, prices[i] - min);
    }
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
