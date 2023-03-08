/*
EXPLANATION
  The groupAnagrams function takes an array of strings strs as input and returns an array of arrays where each sub-array contains
strings that are anagrams of each other. Anagrams are words or phrases formed by rearranging the letters of a different word or phrase.
In this function, we create an object called anagrams that will hold the sorted strings as keys and an array of their anagrams as values.

  The function then loops through each string in the input array using a for...of loop. For each string, we sort its characters in
alphabetical order using the split(), sort(), and join() methods and assign the sorted string to the sortedStr variable. We then check if
the sorted string already exists as a key in the anagrams object. If it does, we add the current string to the array of anagrams for that
key. If it does not, we create a new key with the sorted string and assign an array containing the current string as its value.

  After looping through all the strings in the input array, we return an array of arrays using the Object.values() method. This method
returns an array of all the values in the anagrams object, which are arrays of anagrams. By doing this, we have successfully grouped all
the anagrams together in separate sub-arrays.

  This implementation is efficient because we only loop through the input array once and use a constant amount of additional space to
store the anagrams in the anagrams object. The use of the Object.values() method makes it easy to return the arrays of anagrams as the
final result. Overall, this function is a good example of how to efficiently group strings that are anagrams of each other.
*/

/*
TIME AND SPACE COMPLEXITY
  The time complexity of the groupAnagrams function is O(n * k log k), where n is the number of strings in the strs array and k is the
maximum length of a string in strs. The sorting operation inside the loop takes O(k log k) time, and this operation is performed for each
of the n strings in strs. The worst-case time complexity would be O(n * k^2 log k) if all strings are the same length k.

  The space complexity of the function is O(n * k), where n is the number of strings in the strs array and k is the maximum length of a
string in strs. This is because the anagrams object can store up to n keys (one for each unique sorted string) and each value is an array
that can hold up to k strings. Therefore, the worst-case space complexity would be O(n^2) if all strings are unique and of the same length.
*/

// Define a function that takes an array of strings as input
const groupAnagrams = (strs) => {
  // Create an empty object to store anagrams
  const anagrams = {};

  // Iterate through each string in the input array
  for (const str of strs) {
      // Sort the current string, convert it to a string, and assign to sortedStr variable
      const sortedStr = str.split('').sort().join('');

      // If the sorted string already exists in the anagrams object, push the current string to its array value
      if (anagrams[sortedStr]) {
          anagrams[sortedStr].push(str);
      } 
      // Otherwise, add the sorted string to the object as a key and set its value to an array containing the current string
      else {
          anagrams[sortedStr] = [str];
      }
  }
  // Return an array of the values in the anagrams object
  return Object.values(anagrams);
};

/*
HOW THE VALUES CHANGE IN EACH ITERATION
  Input: strs = ["eat","tea","tan","ate","nat","bat"]

  anagrams: { e: ["eat"] }
  str: "eat"
  sortedStr: "aet"
  anagrams[sortedStr]: undefined
  [str]: ["eat"]

  Iteration 2:
  anagrams: { aet: ["eat", "tea"] }
  str: "tea"
  sortedStr: "aet"
  anagrams[sortedStr]: ["eat", "tea"]
  [str]: ["tea"]

  Iteration 3:
  anagrams: { aet: ["eat", "tea"], ant: ["tan"] }
  str: "tan"
  sortedStr: "ant"
  anagrams[sortedStr]: undefined
  [str]: ["tan"]

  Iteration 4:
  anagrams: { aet: ["eat", "tea", "ate"], ant: ["tan"] }
  str: "ate"
  sortedStr: "aet"
  anagrams[sortedStr]: ["eat", "tea", "ate"]
  [str]: ["ate"]

  Iteration 5:
  anagrams: { aet: ["eat", "tea", "ate"], ant: ["tan", "nat"] }
  str: "nat"
  sortedStr: "ant"
  anagrams[sortedStr]: ["tan", "nat"]
  [str]: ["nat"]

  Iteration 6:
  anagrams: { aet: ["eat", "tea", "ate"], ant: ["tan", "nat"], abt: ["bat"] }
  str: "bat"
  sortedStr: "abt"
  anagrams[sortedStr]: undefined
  [str]: ["bat"]

  At the end of the loop, Object.values(anagrams) is [['eat','tea','ate'],['tan','nat'],['bat']]
*/