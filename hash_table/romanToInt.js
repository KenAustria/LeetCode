// Runtime: 136ms
// Time complexity: O(n)
// Memory: 44.7MB
const romanToInt = str => {
  value = 0;
  symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < str.length; i += 1) {
    symbols[str[i]] < symbols[str[i + 1]]
      ? (value -= symbols[str[i]])
      : (value += symbols[str[i]]);
  }

  return value;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
