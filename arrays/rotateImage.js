// Approach: Nested For Loops
// Runtime: 109ms
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Memory: 41.9MB
const rotateImage = matrix => {
  let n = matrix.length,
    depth = n / 2;
  for (let i = 0; i < depth; i++) {
    let len = n - 2 * i - 1,
      opp = n - 1 - i;
    for (let j = 0; j < len; j++) {
      let temp = matrix[i][i + j];
      matrix[i][i + j] = matrix[opp - j][i];
      matrix[opp - j][i] = matrix[opp][opp - j];
      matrix[opp][opp - j] = matrix[i + j][opp];
      matrix[i + j][opp] = temp;
    }
  }
};

console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(
  rotateImage([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
