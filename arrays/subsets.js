// Approach: Iterative
// Runtime: 81ms
// Time Complexity: O(n)
// Space Complexity: O(n)
// Memory: 43.9MB
const subsets = nums => {
  let res = [[]],
    appendArr = [];

  for (let num of nums) {
    appendArr = [];
    for (let subArr of res) {
      appendArr.push([...subArr, num]);
    }

    res.push(...appendArr);
  }

  return res;
};

console.log(subSets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subSets([0])); // [[],[0]]
