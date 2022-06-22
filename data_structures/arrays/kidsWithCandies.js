// Runtime: 92ms
// Memory: 40.3MB
// Time Complexity: O(n)
// Space Complexity:

const kidsWithCandies = (candies, extraCandies) => {
  // https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621
	let max = candies[0];

  for (let i = 1; i < candies.length; i++) {
    let value = candies[i];
    max = value > max ? value : max;
  }

  return candies.map(candy => candy + extraCandies >= max);
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]
