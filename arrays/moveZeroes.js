// Runtime: 84ms
// Time Complexity: O(n)
// Space Complexity: O(1)
// Memory: 40.5MB
const moveZeroes = nums => {
  // to keep track of where to place a variable if it's value is not a 0
  // initially we'll start placing a value at 0th index
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    // if the current nums[i] value is not 0, set nums[i]'s value at nums[index]
    // nums[index++] commands to increment after every iteration
    if (nums[i] != 0) nums[index++] = nums[i];
  }

  // fill the rest of the array with 0s
  // iterate nums starting at where index left off from first for loop
  for (let j = index; j < nums.length; j++) {
    // assign 0 as value to the index of where we left of from first loop
    nums[j] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
