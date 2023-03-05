/*
EXPLANATION
  We start by converting the input string to lowercase and removing all non-alphanumeric characters. Then, we use two pointers
to compare the characters from the beginning and end of the string, moving towards the center. If all characters match, the 
string is a palindrome.
*/

/*
TIME AND SPACE COMPLEXITY
  Time = O(n), Space = O(1)
  The given function checks whether a string is a palindrome or not. The time complexity of this function is O(n), where n is
the length of the input string. This is because the function uses a while loop to iterate through the characters of the string
from both ends towards the middle, comparing the characters at each position. Since each character is checked only once, the
time complexity is linear with respect to the length of the string.

  The space complexity of the function is O(1), which means that the amount of memory used by the function is constant, 
regardless of the length of the input string. This is because the function uses only a fixed amount of memory to store the left
and right pointers, and a few other variables like the cleaned up string. The function does not create any additional data
structures or use recursion, so its space complexity is constant.
*/

// Define function called isPalindrome that takes a string s as an argument
const isPalindrome = s => {
  // Convert the string to lowercase and remove any non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Initialize two pointers, one at the beginning of the string and one at the end
  let left = 0;
  let right = s.length - 1;
  
  // While the left pointer is less than the right pointer
  while (left < right) {
    // If the characters at the left and right pointers are not the same, return false
    if (s[left] !== s[right]) {
      return false;
    }
    // Move the left pointer to the right and the right pointer to the left
    left++;
    right--;
  }
  
  // If we made it through the loop without returning false, the string is a palindrome
  return true;
}

/*
HOW THE VALUES CHANGE IN EACH ITERATION
  If the input is s = "race a car", the function isPalindrome() will first convert all characters in the string to lowercase
and remove all non-alphanumeric characters using s.toLowerCase().replace(/[^a-z0-9]/g, ''), which results in a new string of "raceacar".

  The left variable is initialized to 0, which points to the first character of the new string, and the right variable is initialized
to s.length - 1, which points to the last character of the new string.

  In the first iteration of the while loop, the function will compare s[left] (which is 'r') with s[right] (which is 'r') and continue
since they are the same. The left variable is incremented to 1 and the right variable is decremented to 8.

  In the second iteration, the function will compare s[left] (which is 'a') with s[right] (which is 'a') and continue since they are
the same. The left variable is incremented to 2 and the right variable is decremented to 7.

  In the third iteration, the function will compare s[left] (which is 'c') with s[right] (which is 'a') and return false since they are
not the same. The string "raceacar" is not a palindrome since the first and last characters are not the same.
*/