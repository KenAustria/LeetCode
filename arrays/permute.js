// Runtime: 108ms
// Time Complexity: O(n!)
// Space Complexity: O(n!)
// Memory: 44.7MB
const permute = letters => {
  let res = [];
  dfs(letters, [], Array(letters.length).fill(false), res);
  return res;
};

const dfs = (letters, path, used, res) => {
  if (path.length == letters.length) {
    // make a deep copy since otherwise we'd be append the same list over and over
    res.push(Array.from(path));
    return;
  }
  for (let i = 0; i < letters.length; i++) {
    // skip used letters
    if (used[i]) continue;
    // add letter to permutation, mark letter as used
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, res);
    // remove letter from permutation, mark letter as unused
    path.pop();
    used[i] = false;
  }
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
