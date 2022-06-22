/*
Strategy: LIFO (Last In, First Out)
Runtime: 85ms
Time Complexity: O(n)
Space Complexity: O(n)
Memory: 42.4MB
*/

const isValid = str => {
  // if string length is empty or an odd number
  if (!str.length || str.length % 2 !== 0) return false;

  // declare host stack
  const stack = [];
  // define map to push closing characters
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);

  for (let i = 0; i < str.length; i += 1) {
    // if the current element's mapping value exist (closing character), push into host array
    if (map.has(str[i])) {
      stack.push(map.get(str[i]));
      /* else, if the current element is not equal to the host array's last element,
			match closing characters with the top of the stack and return false */
    } else if (str[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

/*
Complexity Analysis:
Time Complexity : O(n)


Space Complexity: O(n)

*/

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
