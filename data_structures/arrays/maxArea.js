/*
    TIME AND SPACE COMPLEXITY
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
        area = Math.max(area, Math.min(heights[i], heights[j]) * (j - i))
        // Move the pointer with the smaller height
        heights[i] <= heights[j] ? i++ : j--
    }
    // Return the maximum area
    return area
};
