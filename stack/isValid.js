// Runtime: 120ms
// Time Complexity:
// Space Complexity:
// Memory: 41.6MB

const isValid = str => {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(map[str[i]]);
    } else if (str[i] !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // true
