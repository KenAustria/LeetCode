// Runtime: 92ms
// Memory: 40.2MB
// Time Complexity: O(n^2)
// Space Complexity:

const smallerNumbersThanCurrent = nums => {
  const sorted = [...nums].sort((a,b) => a - b)
	// since the array is sorted,
	// the elements before the current element is how many elements it's greater than
	return nums.map(num => sorted.indexOf(num));
}; 

console.log(smallerNumbersThanCurrent([8,1,2,2,3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6,5,4,8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7,7,7,7])); // [0,0,0,0]

