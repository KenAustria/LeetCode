// Technique: Nested For Loops
// Runtime: 62ms
// Time Complexity: O(n)
// Space Complexity: O(n)
// Memory: 42.3MB

const generate = numRows => {
  const pascal = [];

  for (let i = 0; i < numRows; i++) {
    // create a new children arr within pascal array
    pascal[i] = [];
    // assign every child array's first element's value as 1
    pascal[i][0] = 1;

    for (let j = 1; j < i; j++) {
      // this loop will only run after the second loop of i for one time on each loop. right after -> [[1],[1,1]]
      // in the children arr, the value of j indexed item is = prev array's left item[j-1] + right item[j]
      // pascal[current child array of pascal][current element value of current child array of pascal]
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }

    // finish the loop by assigning every child array's last element's value as 1
    pascal[i][i] = 1;
  }

  return pascal;
};

console.log(generate(5)); // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
console.log(generate(1)); // [[1]]
