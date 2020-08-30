// Runtime: 132ms
// Time Complexity: O(n)
// Memory: 37.4MB
let intersection = (nums1, arr2) => {
	let setNums1 = new Set(nums1)
	return [...new Set(arr2.filter(num => setNums1.has(num)))]
}

console.log(intersection([1,2,2,1], [2,2]));      // [1, 2]
console.log(intersection([4,9,5], [9,4,9,8,4])); // [9, 4]