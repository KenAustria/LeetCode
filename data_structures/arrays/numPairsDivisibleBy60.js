/*
TIME AND SPACE COMPLEXITY
    Time = O(n), Space = O(1)
    The time complexity of the numPairsDivisibleBy60 function is O(n), where n is the length of the time array. This is because the
function loops through the time array once, performing a constant number of operations for each element in the array. Specifically,
for each element in the array, the function calculates the remainder and complement, performs a constant number of array lookups and
updates, and adds to the count variable. Therefore, the time complexity is linear with respect to the length of the input array.

    The space complexity of the function is O(1), because it uses a constant amount of additional space to store the remainders array
and the count variable. The remainders array has a fixed size of 60, which does not depend on the length of the input array, so it is
considered constant space. The count variable also uses constant space, since it stores a single integer value. Therefore, the space
complexity is constant with respect to the length of the input array.
*/

const numPairsDivisibleBy60 = time => {
    // Initialize an array of size 60, filled with zeros
    const remainders = new Array(60).fill(0);
    
    // Initialize a count variable to keep track of the number of pairs
    let count = 0;
    
    // Loop through each time value in the input array
    for (let i = 0; i < time.length; i++) {
      // Calculate the remainder of the time value when divided by 60
      const remainder = time[i] % 60;
      
      // Calculate the complement of the remainder, i.e., the value that would make
      // the sum of the two time values a multiple of 60
      const complement = (60 - remainder) % 60;
      
      // If truthy, add the count of pairs whose remainder is the complement to the total count
      count += remainders[complement];
      
      // Increment the count of the current remainder in the remainders array
      // to keep track of the number of occurrences of that remainder in the time array
      remainders[remainder]++;
    }
    
    // Return the total count of pairs
    return count;
};
  
/*
HOW THE VALUES CHANGE IN EACH ITERATION
    Initial values:
    time = [30,20,150,100,40]
    remainders = [0, 0, 0, 0, 0, 0, ..., 0] (60 zeros)
    count = 0

    Iteration 1:
    time[i] = 30
    remainder = 30 % 60 = 30
    complement = (60 - 30) % 60 = 30
    count += remainders[complement] = remainders[30] = 0
    remainders[remainder]++ = remainders[30]++

    Iteration 2:
    time[i] = 20
    remainder = 20 % 60 = 20
    complement = (60 - 20) % 60 = 40
    count += remainders[complement] = remainders[40] = 0
    remainders[remainder]++ = remainders[20]++

    Iteration 3:
    time[i] = 150
    remainder = 150 % 60 = 30
    complement = (60 - 30) % 60 = 30
    count += remainders[complement] = remainders[30] = 1
    remainders[remainder]++ = remainders[30]++

    Iteration 4:
    time[i] = 100
    remainder = 100 % 60 = 40
    complement = (60 - 40) % 60 = 20
    count += remainders[complement] = remainders[20] = 1
    remainders[remainder]++ = remainders[40]++

    Iteration 5:
    time[i] = 40
    remainder = 40 % 60 = 40
    complement = (60 - 40) % 60 = 20
    count += remainders[complement] = remainders[20] = 2
    remainders[remainder]++ = remainders[40]++

    Final values:
    count = 3
    remainders = [1, 0, 1, 0, 0, 0, ..., 0, 2] (1 at index 30, 1 at index 150, 2 at index 40)

*/