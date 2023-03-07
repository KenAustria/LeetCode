/*
EXPLANATION
    The longestPalindrome function takes in a string as an input and returns the longest palindrome within that string. 
A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward, for example, "racecar".
The function implements an algorithm that checks for palindromes in two phases, one for palindromes with odd length and the
other for palindromes with even length.

  The algorithm iterates through each character in the string and uses that character as a center point to check for palindromes
with odd and even lengths. For odd-length palindromes, the algorithm checks each character to the left and right of the center 
point until it finds a non-matching character or the string ends. For even-length palindromes, the algorithm checks each character
to the left and right of the center point until it finds two non-matching characters or the string ends.

  If the algorithm finds a palindrome of a longer length than the previously found palindromes, it updates the maximum length and
the start position of the palindrome. Finally, the function returns the substring that starts from the start position and has a
length equal to the maximum palindrome length.
*/

/*
TIME AND SPACE COMPLEXITY
    This algorithm has a time complexity of O(n^2), where n is the length of the input string. The reason is that, in the worst-case
scenario, the algorithm would need to iterate through each character in the string and also check each possible substring. However, 
since we are only checking palindromes, the actual time complexity is much better than O(n^2) in practice.

    The space complexity of the algorithm is O(1), which is constant space since we are only using a few variables to store the start
position, maximum length, and some index variables. The space required by the input string and output substring is not taken into account
since they are required for the function to operate.
*/

// Define maxLength and start
const longestPalindromicSubstring = s => {
    let maxLength = 0;
    let start = 0;
  
    // Loop through the string s
    for (let i = 0; i < s.length; i++) {
  
      // Check palindrome with odd length
      let left = i;
      let right = i; // the center of a palindrome with an odd length is a single character
      // Ensure the left and right index does not go out of bounds and remains within the bounds of the input string s.
      // Ensures that the characters at the left and right indices are equal, indicating that the current substring is still a palindrome.
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        // Update maxLength and start if a longer palindrome is found
        // Check if the current substring, which is represented by the indices left and right is longer than the current maximum length maxLength
        if (right - left + 1 > maxLength) {
          // Keep track of the starting index of the longest substring
          // Since we're iterating through the string from left to right, the left index represents the start of the current substring.
          maxLength = right - left + 1;
          start = left;
        }
        left--;
        right++;
      }
  
      // Check palindrome with even length
      left = i;
      right = i + 1; // the center of a palindrome with an even length is two characters.
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        // Update maxLength and start if a longer palindrome is found
        if (right - left + 1 > maxLength) {
          maxLength = right - left + 1;
          start = left;
        }
        left--;
        right++;
      }
    }
  
    // Return the longest palindrome substring
    return s.slice(start, start + maxLength);
}
  
  
/*
HOW THE VALUES CHANGE IN EACH ITERATION
  Input: s = "babad"

  Iteration 1:

  maxLength: 0
  start: 0
  oddLeft: 0
  oddRight: 0
  oddLeft >= 0: true
  oddRight < s.length: true
  s[oddLeft] === s[oddRight]: true
  evenLeft: 0
  evenRight: 1
  Iteration 2:

  maxLength: 1
  start: 0
  oddLeft: 1
  oddRight: 1
  oddLeft >= 0: true
  oddRight < s.length: true
  s[oddLeft] === s[oddRight]: true
  evenLeft: 1
  evenRight: 2
  Iteration 3:

  maxLength: 3
  start: 1
  oddLeft: 1
  oddRight: 3
  oddLeft >= 0: true
  oddRight < s.length: true
  s[oddLeft] === s[oddRight]: false
  evenLeft: 2
  evenRight: 3
  Iteration 4:

  maxLength: 3
  start: 1
  oddLeft: 2
  oddRight: 2
  oddLeft >= 0: true
  oddRight < s.length: true
  s[oddLeft] === s[oddRight]: true
  evenLeft: 2
  evenRight: 3
  Iteration 5:

  maxLength: 3
  start: 1
  oddLeft: 3
  oddRight: 3
  oddLeft >= 0: true
  oddRight < s.length: true
  s[oddLeft] === s[oddRight]: true
  evenLeft: 3
  evenRight: 4
  Iteration 6:

  maxLength: 3
  start: 1
  oddLeft: 4
  oddRight: 4
  oddLeft >= 0: true
  oddRight < s.length: true
  s[oddLeft] === s[oddRight]: false
  evenLeft: 3
  evenRight: 4

  Finally, the function returns the slice of the string "babad" from index 1 to index 4, which is "bab".
*/