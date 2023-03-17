/*
  TIME AND SPACE COMPLEXITY
  Time = O(n), Space = O(1)
  The time complexity of this algorithm is O(n), where n is the length of the input array nums. This is because we perform two passes
through the array: first to find the pivot element and second to reverse the elements after the pivot. The two while loops in the
algorithm are both O(n), and the array reversal is also O(n/2) which is equivalent to O(n).
  The space complexity of the algorithm is O(1), because we are not using any additional data structures that depend on the size of the
input array. The only variables we are using are i, j, left, and right, which take up constant space regardless of the size of the input
array. Therefore, the space used by the algorithm is constant and does not depend on the size of the input array.
*/

// Find the next possible arrangement of its elements such that it is greater than the current arrangement,
// and if there are no more greater permutations available, then we need to rearrange the array in its lowest possible order.
const nextPermutation = nums => {
    // Ensure that there are at least two more elements in the array after the current element being considered.
    // because starting at the last index, would result in not enough elements left in the array to form a triplet.
    // Find the index where the array starts decreasing. ex: If [1, 3, 5, 4, 2], then modify [5, 4, 2]
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }

    // If we haven't reached the start of the array, we've found a pivot: reference point to divide into two parts
    if (i >= 0) {
      let j = nums.length - 1;
      // Iterate backwards through 'nums' until we find an element greater than the pivot
      // ex: if nums = [1,2,3], then nums[i] = 2 and nums[j] = 3
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
      // Swap the pivot with the greater element
      // ex: since 3 > 2, then we swap resulting to [1,3,2]
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    // Reverse the subarray to the right of the pivot
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
};

/*
HOW THE VALUES CHANGE IN EACH ITERATION
    Iteration 1:
    nums: [1,2,3]
    i: 0
    nums[i]: 1
    nums[i+1]: 2
    j: 2
    nums[j]: 3
    left: 1
    right: 2

    Iteration 2:
    nums: [1,3,2]
    i: 1
    nums[i]: 3
    nums[i+1]: 2
    j: 2
    nums[j]: 2
    left: 2
    right: 1

    Iteration 3:
    nums: [2,1,3]
    i: 0
    nums[i]: 2
    nums[i+1]: 1
    j: 2
    nums[j]: 3
    left: 1
    right: 2
*/


  