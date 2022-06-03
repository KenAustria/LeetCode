// Approach:
// Runtime: 139ms
// Time Complexity:
// Space Complexity:
// Memory: 42.6MB
const titleToNumber = columnTitle => {
  const charCodeBase = 'A'.charCodeAt(0) - 1;
  const n = columnTitle.length;
  let number = 0;

  for (let i = 0; i < n; i++)
    number +=
      (columnTitle.charCodeAt(i) - charCodeBase) * Math.pow(26, n - i - 1);

  return number;
};
