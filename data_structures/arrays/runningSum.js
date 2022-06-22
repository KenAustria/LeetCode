// Runtime: 68ms
// Time complexity: O(n)
// Memory: 40.1MB

const runningSum = nums => {
		nums.reduce((acc, currentVal, idx, arr) => arr[idx] += acc)
    return nums
}

console.log(runningSum([1,2,3,4])); // [1,3,6,10]
console.log(runningSum([1,1,1,1,1])); // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])); // [3,4,6,16,17]