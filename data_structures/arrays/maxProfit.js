/*
EXPLANATION
  The function achieves this by iterating through the array of prices and keeping track of the minimum price seen so far and the maximum
profit that can be made based on that minimum price.

  At the beginning of the function, two variables are declared and initialized: max and min. max is initially set to 0 because there is no
profit to be made when the array is empty. min is set to Infinity because it needs to be initialized with a value that is higher than any
possible value in the array.

  Next, the function loops through the array of prices using a for loop, starting at the first element and ending at the last element. 
For each element in the array, the function checks whether it is smaller than the current minimum value stored in min. If it is, then the
value of min is updated to the new, smaller value. If the value of the current element is not smaller than min, then the function checks
whether the difference between the current element and the minimum value seen so far is greater than the current value of max. If it is,
then the value of max is updated to the new, larger value.

  Once the loop has finished iterating through the entire array, the function returns the value of max, which represents the maximum
profit that can be made by buying and selling a single stock over the given period of time.

  In summary, this function uses a simple algorithm to determine the maximum profit that can be made from a single stock by buying low and
selling high. It keeps track of the minimum price seen so far and calculates the maximum profit that can be made based on that minimum 
price. The function is efficient and can handle arrays of any size.
*/

/*
TIME AND SPACE COMPLEXITY
  The given function maxProfit takes an array of prices as an input and returns the maximum profit that can be obtained by buying and
selling a stock at any point in time.

  The time complexity of this function is O(n), where n is the length of the input array. This is because the function loops through the
array only once, comparing each element with the current minimum value and updating the maximum profit as it goes. Therefore, th
e function's running time grows linearly with the size of the input array. 

  The space complexity of this function is O(1), which means that it uses a constant amount of memory regardless of the size of the input
array. This is because the function only uses a fixed number of variables (max and min) to keep track of the maximum profit and the
minimum price seen so far. The amount of memory used by the function does not increase with the size of the input array.
*/

// This function takes an array of prices as input and returns the maximum profit that can be made from buying and selling stocks
const maxProfit = prices => {
  // Initialize variables for the maximum profit and the minimum price seen so far
  let max = 0;
  let min = Infinity;
  
  // Loop through the array of prices
  for (let i = 0; i < prices.length; i++) {
    // If the current price is less than the minimum seen so far, update the minimum
    if (prices[i] < min) {
      min = prices[i];
    } else {
      // Otherwise, calculate the profit that could be made by selling at the current price and update the maximum profit if it is greater than the current maximum
      // prices[i] - min calculates the profit or gain that would be obtained by buying the stock at the current price and selling it at the lowest price seen so far.
      max = Math.max(max, prices[i] - min);
    }
  }
  
  // Return the maximum profit that could be made
  return max;
};
  
/*
HOW THE VALUES CHANGE IN EACH ITERATION
  i = 0:
  max = 0
  min = 7
  prices[i] = 7
  prices[i] < min = false
  Math.max(max, prices[i] - min) = 0

  i = 1:
  max = 0
  min = 1
  prices[i] = 1
  prices[i] < min = true
  Math.max(max, prices[i] - min) = 0

  i = 2:
  max = 4
  min = 1
  prices[i] = 5
  prices[i] < min = false
  Math.max(max, prices[i] - min) = 4

  i = 3:
  max = 4
  min = 1
  prices[i] = 3
  prices[i] < min = false
  Math.max(max, prices[i] - min) = 4

  i = 4:
  max = 5
  min = 1
  prices[i] = 6
  prices[i] < min = false
  Math.max(max, prices[i] - min) = 5

  i = 5:
  max = 5
  min = 1
  prices[i] = 4
  prices[i] < min = false
  Math.max(max, prices[i] - min) = 5
*/