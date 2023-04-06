/*
TASK
		We need to find all combinations of three numbers in the array that add up to zero, but the same triplet should not be included
	more than once in the output.

EDGE CASE(S)
	• Empty input array: if the input array is empty, there are no triplets that satisfy the conditions, so the output should also
	be an empty array.
	• Array with less than 3 elements: if the input array has less than 3 elements, it is impossible to form a triplet that satisfies
	the conditions, so the output should also be an empty array.
	• Arrays with all positive or all negative numbers: in this case, it is impossible to form a triplet that adds up to zero, so the
	output should also be an empty array.
	• Arrays with duplicate elements: the output should not contain duplicate triplets. If the input array contains duplicate elements,
	care must be taken to avoid generating duplicate triplets in the output.

BRUTE FORCE
		We can iterate through all possible combinations of triplets, checking if their sum is equal to zero, and then filtering out any
	duplicate solutions. This would involve three nested loops to iterate over all possible triplets, resulting in a time complexity of
	O(n^3). To filter out duplicates, an additional set would need to be used, resulting in a space complexity of O(n^3) as well. 
*/
const BFthreeSum = (nums) => {
	// initialize an empty result array
	const result = [];
	// loop through all possible combinations of three numbers using three nested loops
	for (let i = 0; i < nums.length - 2; i++) {
	  for (let j = i + 1; j < nums.length - 1; j++) {
		for (let k = j + 1; k < nums.length; k++) {
		  // check if the sum of the current combination is 0
		  if (nums[i] + nums[j] + nums[k] === 0) {
			// create an array of the current combination
			const triplet = [nums[i], nums[j], nums[k]];
			// check if the triplet is already in the result array
			let isDuplicate = false;
			for (let l = 0; l < result.length; l++) {
			  if (
				result[l][0] === triplet[0] &&
				result[l][1] === triplet[1] &&
				result[l][2] === triplet[2]
			  ) {
				isDuplicate = true;
				break;
			  }
			}
			// if the triplet is not a duplicate, add it to the result array
			if (!isDuplicate) {
			  result.push(triplet);
			}
		  }
		}
	  }
	}
	// return the result array
	return result;
};

/*
IMPROVEMENTS AND PATTERN IDENTIFICATION
		The first improvement is to sort the input array in ascending order and use two nested loops to iterate over the array. One loop
	will go through the array from the beginning to the end, and the other loop will go from the current index to the end. We can use a
	binary search to find the third number that will make the sum equal to zero. This will reduce the time complexity from O(n^3) to
	O(n^2), which means it will be much faster for larger input arrays.

		The second improvement is to eliminate duplicate values in the input array before starting the calculation. We can sort the array
	and then skip duplicate values while iterating over it. This will simplify the duplicate checking process and reduce the number of
	computations.

		We know to use the Two Pointers technique because the first improvement suggested is to sort the input array and use two nested
	loops to iterate over it. This is a common characteristic of the Two Pointers technique, where two pointers are used to scan the 
	array from different ends to find the target value or values. Additionally, eliminating duplicate values in the input array is also
	a characteristic of the Two Pointers technique, as it involves scanning through the array to compare and remove duplicate values.
	Therefore, given the suggested improvements, we can use the Two Pointers technique to solve the problem more efficiently.

BIG-O
	Time = O(n^2), Space = O(n)
		The time complexity of the threeSum algorithm is O(n^2), where n is the length of the input array nums. The reason for this is
	that the algorithm uses a nested loop to iterate over all possible pairs of numbers in the input array, which gives an overall time
	complexity of O(n^2). Additionally, the sort method used at the beginning of the algorithm has a time complexity of O(n log n), but
	since it is only called once, it does not significantly affect the overall time complexity.
		The space complexity of the threeSum algorithm is O(n), where n is the length of the input array nums. This is because the 
	algorithm uses an array called result to store the output, and the maximum size of this array is proportional to the number of valid
	triplets that can be formed from the input array, which is at most O(n^2) (when all elements are unique). Therefore, the space 
	complexity of the algorithm is O(n).
*/

// https://leetcode.com/problems/3sum/
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
  