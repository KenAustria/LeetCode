/*
TIME AND SPACE COMPLEXITY
	Time = O(n^2), Space = O(n)
	The time complexity of the threeSum algorithm is O(n^2), where n is the length of the input array nums. The reason for this is that
the algorithm uses a nested loop to iterate over all possible pairs of numbers in the input array, which gives an overall time complexity
of O(n^2). Additionally, the sort method used at the beginning of the algorithm has a time complexity of O(n log n), but since it is only
called once, it does not significantly affect the overall time complexity.
	The space complexity of the threeSum algorithm is O(n), where n is the length of the input array nums. This is because the algorithm
uses an array called result to store the output, and the maximum size of this array is proportional to the number of valid triplets that
can be formed from the input array, which is at most O(n^2) (when all elements are unique). Therefore, the space complexity of the
algorithm is O(n).
*/

// Function that finds all unique triplets in the array that sum up to zero
const threeSum = (nums) => {
	// Sort the array in non-descending order
	nums.sort((a, b) => a - b);
	// Initialize an empty array to store the result
	const result = [];
  
	// Iterate through each element of the array up to the second-to-last element
	// to ensure that there are at least two more elements in the array after the current element being considered.
	for (let i = 0; i < nums.length - 2; i++) {
	  // Skip if the current element is a duplicate of the previous element
	  if (i > 0 && nums[i] === nums[i - 1]) continue;
	  // Initialize pointers for the left and right elements
	  let left = i + 1;
	  let right = nums.length - 1;
  
	  // While there are still elements to compare
	  while (left < right) {
		// Calculate the sum of the current triplet
		const sum = nums[i] + nums[left] + nums[right];
		// If the sum is 0, add the triplet to the result array
		if (sum === 0) {
		  result.push([nums[i], nums[left], nums[right]]);
		  // Move the left and right pointers to the next unique element
		  left++;
		  right--;
		  // Skip duplicates of the left pointer
		  while (left < right && nums[left] === nums[left - 1]) left++;
		  // Skip duplicates of the right pointer.
		  while (left < right && nums[right] === nums[right + 1]) right--;
		// If the sum is negative, 
		} else if (sum < 0) {
		  // move the left pointer to the next element
		  left++;
		} else {
		  // Else, the sum is positive, move the right pointer to the previous element
		  right--;
		}
	  }
	}
  
	// Return the result array
	return result;
};
  