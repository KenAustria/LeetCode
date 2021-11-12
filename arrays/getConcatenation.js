// Runtime: 88ms
// Time complexity: O(n)
// Memory: 42.4MB
const getConcatenation = (nums) => {
	const newNums = [...nums]
  const ans = nums.concat(newNums)
  return ans
}