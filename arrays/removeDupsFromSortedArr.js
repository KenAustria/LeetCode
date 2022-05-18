// Runtime: 72ms
// Time Complexity: O(n)
// Space Complexity: O(1)
// Memory: 39.2MB
const removeDupsFromSortedArr = nums => {
  // represents where we should place new unique numbers found
  let index = 1;

  // iterate up to compare 2nd-to-last element to last element w/o out of bounds
  for (let i = 0; i < nums.length - 1; i++) {
    // if adjacent numbers are not equal, next num at index position
    if (nums[i] != nums[i + 1]) {
      nums[index++] = nums[i + 1]; // `index++` to not overwrite value constantly
    }
  }

  // index holds last unique el in arr, which is lenght of new arr
  return index;
};

console.log(removeDupsFromSortedArr([10, 10, 20])); // 2
console.log(removeDupsFromSortedArr([10, 20, 20, 30, 40, 40, 50])); // 5

// nums = [10,10,20]
// index = 1
// nums[i] = 10, nums[j] = 10

// index = 1
// nums[i] = 10, nums[j] = 20
// nums[index] = (j = 20)
// nums [10, 20]
