/*
EXPLANATION
	The isAnagram function takes in two string parameters, s and t. It checks whether t is an anagram of s, which means t can
be formed by rearranging the characters in s.

	The function first compares the lengths of s and t. If they are not equal, then they cannot be anagrams and the function
returns false.

	If the lengths are equal, the function creates an object called freq to store the frequency of each character in s. It
uses a for loop to iterate over each character in s. For each character, it checks if it exists as a key in the freq object.
If it does, it increments the value of that key. If it does not, it creates the key with a value of 1.

	The function then iterates over each character in t. For each character, it checks if it exists as a key in the freq
object. If it does not, then the characters in s and t do not match, so the function returns false. If the character exists,
it decrements the value of that key in the freq object.

	Finally, the function iterates over each key in the freq object. If any value is not equal to 0, then there are characters
in s and t that do not match, so the function returns false. If all values are 0, then t is an anagram of s, and the function
returns true.
*/

/*
TIME AND SPACE COMPLEXITY
	The time complexity of the given function isAnagram is O(n), where n is the length of the input string s or t. The first
for loop has O(n) time complexity because it iterates over the string s of length n. The second for loop also has O(n) time
complexity because it iterates over the string t of length n. The last for loop iterates over the frequency map, which has a
maximum of 26 entries for the 26 English letters. Therefore, its time complexity is constant O(1).

	The space complexity of the function is O(1) because the size of the frequency map is fixed and is independent of the size
of the input strings s and t. Although a frequency map is created with the size of 26 entries, it does not depend on the size
of the input strings, so it can be considered constant space.
*/


const isAnagram = (s, t) => {
	// Check if the length of s and t are equal
	if (s.length !== t.length) return false;
  
	// Create an empty frequency object
	const freq = {};
  
	// Loop through the string s and store the frequency of each character in the frequency object
	for (let i = 0; i < s.length; i++) {
	  freq[s[i]] = freq[s[i]] ? freq[s[i]] + 1 : 1;
	}
  
	// Loop through the string t and check if each character is present in the frequency object
	// If it is, decrease its frequency by 1
	for (let i = 0; i < t.length; i++) {
	  if (!freq[t[i]]) return false;
	  freq[t[i]]--;
	}
  
	// Loop through the frequency object and check if all frequencies are zero
	for (const char in freq) {
	  if (freq[char] !== 0) return false;
	}
  
	// If all frequencies are zero, s and t are anagrams of each other
	return true;
}

/*
HOW THE VALUES CHANGE IN EACH ITERATION
	s and t have the same length, which is 3 in this case. Therefore, the if statement that checks if s and t have the same length
will return true, and the function will proceed with the next steps.

	In the first for loop, the function creates an object called freq that stores the frequency of each character in s. It iterates
over each character in s and adds it to the freq object. In this case, freq will be { r: 1, a: 1, t: 1 }.

	In the second for loop, the function iterates over each character in t and checks if it exists in the freq object. If it does
not exist, then the function returns false. In this case, c and a are not in freq, so the function returns false.

	Since the function returned false in the second for loop, it does not execute the third for loop, which checks if there are any
characters in the freq object that have a non-zero frequency. The function returns false since s and t are not anagrams.
*/