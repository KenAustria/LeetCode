/*
TASK
        The problem requires finding the next permutation of a given array of integers using only constant extra memory and replacing the
    array in place. The solution must identify the smallest possible rearrangement of the array elements that is lexicographically larger
    than the original array. 
        For example, if the array is [1, 2, 3], the next permutation would be [1, 3, 2] because it is the smallest possible rearrangement
    of the elements that is lexicographically larger than [1, 2, 3].

EDGE CASES
    • Empty input array: An empty input array should be handled as a valid input, and the function should return an empty array.
    • Single element input array: If the input array has only one element, it should be handled as a valid input, and the function should
     return the same array.
    • Array with repeated elements: If the input array contains repeated elements, the function should still find the next permutation. 
    • Already largest permutation: If the input array is already the largest possible permutation, the function should rearrange it as the
     lowest possible order (i.e., sorted in ascending order).
    • Maximum and minimum values: The input array may contain the maximum and minimum possible values (0 and 100, respectively), so the
    function should handle these values correctly. 

BRUTE FORCE
        The first step is done by scanning the array from right to left until we find the largest index i such that nums[i] < nums[i + 1].
    The second step involves scanning the array from right to left until we find the largest index j such that nums[j] > nums[i]. The 
    third step involves swapping nums[i] and nums[j], and reverse the sub-array nums[i+1:] to get the next permutation. If no such index i
    exists, the array is already sorted in descending order, and we simply reverse the entire array to get the smallest possible 
    permutation.

        The time complexity of this approach is O(n^2), since we are doing two scans through the array, and the reverse operation takes
    O(n) time. The space complexity is O(1), since we are doing everything in place.
*/
const nextPermutation = nums => {
  const n = nums.length;
  let i = n - 2;
  
  // Find the largest index i such that nums[i] < nums[i + 1]
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  
  // If no such index exists, reverse the entire array
  if (i < 0) {
    nums.reverse();
    return nums;
  }
  
  // Find the largest index j such that nums[j] > nums[i]
  let j = n - 1;
  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }
  
  // Swap nums[i] and nums[j]
  [nums[i], nums[j]] = [nums[j], nums[i]];
  
  // Reverse the sub-array nums[i+1:]
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  
  return nums;
}

/*
IMPROVEMENTS AND PATTERN IDENTIFICATION
        Instead of the need for nested loops to iterate over all possible permutations,  we identify the first decreasing element from
    the end of the array. Then, we find the smallest element to the right of that element that is greater than it using a second pointer.
    We swap these two elements and reverses the subarray to the right of the original element to create the next lexicographically greater
    permutation.

        This approach saves a lot of time by avoiding unnecessary permutations and reducing the number of operations needed to compute the
    next permutation.

BIG-O
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

    if (i >= 0) {
      let j = nums.length - 1;
      // If we haven't reached the start of the array, we've found a pivot: reference point to divide into two parts
      while (j >= 0 && nums[j] <= nums[i]) {
        // Iterate backwards through 'nums' until we find an element greater than the pivot
        j--;
      }
      // Swap the pivot with the greater element
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    // Reverse the subarray to the right of the pivot
    let left = i + 1
    let right = nums.length - 1;
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


  