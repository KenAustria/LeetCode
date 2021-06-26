// Runtime: 84ms
// Time complexity: O(n)
// Memory: 40.5MB
const moveZeroes = (nums) => {
  let index = 0 // declare index to keep track of

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      // set current i value to the current index, increment on every iteration
      nums[index++] = nums[i]
    }
  }

  // iterate nums starting at where index left of from first loop
  for (let j = index; index < nums.length; index++) {
    // assign 0 as value to the index of where we left of from first loop
    nums[index] = 0
  }

  return nums
};

console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]
console.log(moveZeroes([0])) // [0]