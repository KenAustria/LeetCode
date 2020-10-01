// Runtime: 120ms
// Time complexity: O(n)
// Memory: 49.4MB
const groupAnagrams = function(strs) {
  let host_map = {};
  let result_arr = [];

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i]; // unsorted version used to be pushed to result_arr
    let sorted = str.split('').sort().join('');

		// if sorted word doesn't exist in host_map, populate as an array, first of it's group
		// else, add as addition to group
    if (host_map[sorted] === undefined) {
      host_map[sorted] = [str];
    } else {
      host_map[sorted].push(str);
    }
  }

  for (let arr in host_map) {
    result_arr.push(host_map[arr]);
  }

  return result_arr;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]