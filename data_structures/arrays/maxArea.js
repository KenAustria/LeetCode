/*
TASK
        We are given an array of heights, where each height represents a vertical line in a graph. The goal is to find two lines that,
    along with the x-axis, form a container that can hold the most water. The amount of water that the container can hold is equal to
    the area between the two lines and the x-axis. You cannot tilt the container.

EDGE CASES
    • Empty array: []
    • Array with one element: [5]
    • Array with two elements: [2, 5]
    • Array with three elements where the maximum area is at the edges: [5, 2, 5]
    • Array with three elements where the maximum area is in the middle: [2, 5, 2]
    • Array with all elements in non-increasing order: [5, 4, 3, 2, 1]
    • Array with all elements in non-decreasing order: [1, 2, 3, 4, 5]
    • Array with repeated elements: [2, 2, 2, 2]

BRUTE FORCE
        We use two nested loops to consider all possible pairs of vertical lines and calculate the area of the container formed by them. 
    We update a variable max with the maximum area found so far and return it after the loops finish. This approach has a time complexity
    of O(n^2), which is not efficient for large inputs.
*/

const maxArea = height => {
    let max = 0; // variable to store the maximum area
  
    for (let i = 0; i < height.length; i++) { // iterate over each index in the height array
      for (let j = i + 1; j < height.length; j++) { // iterate over each index in the height array starting from i + 1
        let area = Math.min(height[i], height[j]) * (j - i); // calculate the area of the container by multiplying the minimum height between i and j by the distance between them
        max = Math.max(max, area); // update max if necessary by taking the maximum value between the current max and the calculated area
      }
    }
  
    return max; // return the maximum area
  }

/*
IMPROVEMENTS AND PATTERN IDENTIFICATION
        In the brute force approach, we checked all possible combinations of lines to calculate the maximum area. However, in the optimized
    approach using the Two Pointers technique, we start with the first and last line, and keep moving the pointer of the shorter line
    towards the middle. This helps to narrow down the search space, and allows us to calculate the maximum area in a more efficient way,
    with a time complexity of O(n).

BIG-O
    Time = O(n), Space = O(1)
        The time complexity of this function is O(n) where n is the length of the input array height. This is because the function uses a
    two-pointer approach and loops through the array once. Each iteration either increments or decrements one of the pointers. Since the
    pointers move towards each other, and each pointer moves at most n times, the number of iterations is at most n.

        The space complexity of the function is O(1) because it only uses a fixed number of variables that do not depend on the size of 
    the input.
*/

// Define function to calculate max area
const maxArea = heights => {
    // Initialize variables for area, left and right indices
    let area = 0
    let i = 0 
    let j = heights.length - 1
    
    // While left index is less than right index
    while (i < j) {
        // Update area by taking the maximum of the current area and the minimum height of the two lines multiplied by the distance between them
        /* If we use the height of the taller line instead, the area would be the same or smaller since the water cannot go above the shorter
          line. Therefore, we take the minimum height of the two lines to ensure that we calculate the maximum possible area.*/
        area = Math.max(area, Math.min(heights[i], heights[j]) * (j - i))
        // Move the pointer with the smaller height
        heights[i] <= heights[j] ? i++ : j--
    }
    // Return the maximum area
    return area
};
