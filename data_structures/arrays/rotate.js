/*
TIME AND SPACE COMPLEXITY
	Time = O(n) , Space = O(1)
	The time complexity of the rotate function is O(n), where n is the length of the nums array. This is because the function calls the
reverse function three times, and the reverse function has a time complexity of O(n/2), which simplifies to O(n). Additionally, the
modulus operation has a constant time complexity, so it doesn't affect the overall time complexity.

	The space complexity of both the rotate and reverse functions is O(1), because they both use a constant amount of extra space
regardless of the input size. This is because the functions modify the input array in place, rather than creating a new array or using
additional data structures.
*/

// Define a function 'rotate' which rotates an array 'nums' to the right 'k' times.
const rotate = (nums, k) => {
	// Make sure the number of rotations is less than the length of the array
	k %= nums.length;
  
	// Reverse the array 'nums' from start to end
	reverse(nums, 0, nums.length - 1);
	// Unreverse the left subarray
	// Reverse the subarray from the start of 'nums' to the 'k - 1'th element
	// Ex: [1, 2, 3, 4, 5] and k = 3. Subarray = [1, 2, 3] would now be [3, 2, 1]
	reverse(nums, 0, k - 1);
	// Unreverse the right subarray
	// Reverse the subarray from the 'k'th element to the end of 'nums'
	// Ex: [1, 2, 3, 4, 5] and k = 2. Subarray = [3, 4, 5] would make nums = [1, 2, 5, 4, 3]
	reverse(nums, k, nums.length - 1);
  
	// Return the rotated array 'nums'
	return nums;
};
  
// Define a function 'reverse' which reverses a subarray from 'start' to 'end' in an array 'nums'
const reverse = (nums, start, end) => {
	// Loop through the subarray and swap the elements at each end of the subarray
	while (start < end) {
		[nums[start], nums[end]] = [nums[end], nums[start]];
		start++;
		end--;
	}
};

/*
HOW VALUES CHANGE IN EACH ITERATION
	For nums = [1, 2, 3, 4, 5, 6, 7] and k = 3:
	
	Iteration 1
	reverse(nums, 0, nums.length - 1):
	nums: [7, 6, 5, 4, 3, 2, 1]
	k: 3
	start: 0
	end: 6

	Iteration 2
	reverse(nums, 0, k - 1):
	nums: [5, 6, 7, 4, 3, 2, 1]
	k: 3
	start: 0
	end: 2

	Iteration 3
	reverse(nums, k, nums.length - 1):
	nums: [5, 6, 7, 1, 2, 3, 4]
	k: 3
	start: 3
	end: 6
*/