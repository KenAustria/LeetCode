/*
EXPLANATION
  The function takes in two parameters, an array of integers nums and a target value target. It returns an array of two indices that
correspond to the positions of the two numbers in the array that add up to the target value.

  The function makes use of an object complements to store the complements of the numbers in the array. A complement of a number is
the difference between the target value and the number itself. The function then checks if the complement of the current number exists
in the complements object. If it does, the function returns an array of the indices of the two numbers that add up to the target value.

  The function iterates over the array using a for loop, starting from the first number at index 0 and ending at the last number at index
nums.length - 1. In each iteration, the function calculates the complement of the current number by subtracting it from the target value.
It then checks if the complement exists in the complements object using the if statement. If the complement exists, the function returns
an array of the indices of the two numbers that add up to the target value, using the index of the complement and the index of the current
number.

  If the complement does not exist, the function adds the current number and its index to the complements object. This ensures that the
complement of any future number in the array will be checked against the previously seen numbers in the complements object. By storing the
indices of the numbers in the complements object, the function can quickly retrieve the indices of the two numbers that add up to the
target value when it finds a complement.
*/

/*
TIME AND SPACE COMPLEXITY
  Time = O(n), Space = O(n)
  The time complexity of this function is O(n) because it has a single loop that iterates through the nums array once. The operations
inside the loop, which include accessing and assigning values in the complements object, are constant time operations.

  The space complexity of this function is also O(n) because in the worst case scenario, all the elements of the nums array could be stored
in the complements object. However, the space used by the complements object could be smaller if the input array has duplicates or there
is a solution to the problem earlier in the array.
*/

// Define a function called twoSum which takes in an array of integers called nums and an integer called target as its parameters
const twoSum = (nums, target) => {
  // Define an empty object called complements that will store the complements needed to reach the target sum
  const complements = {};

  // Start a for loop that will iterate over the length of the nums array
  for (let i = 0; i < nums.length; i++) {
      // Define a variable called complement that stores the difference between the target and the current element in the nums array
      const complement = target - nums[i];
      
      // If the current complement already exists in the complements object
      if (complements[complement] !== undefined) {
          // Return an array with the index of the current complement and the index of the current element as its two elements
          return [complements[complement], i];
      }
      
      // Add the current element to the complements object with its index as its value
      complements[nums[i]] = i;
  }
};

/*
HOW THE VALUES CHANGE IN EACH ITERATION

*/