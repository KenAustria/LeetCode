// Runtime: 68ms
// Memory: 40.6MB
// Time Complexity: O(n)
// Space Complexity:

const targetIndices = (nums, target) => {
  let result = []
    let sortedArr = nums.sort((a,b) => a-b);

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] == target) {
            result.push(i)
        }
    }

    return result;
};

console.log(targetIndices([1,2,5,2,3], 2)); // [1,2]
console.log(targetIndices([1,2,5,2,3], 3)); // [3]
console.log(targetIndices([1,2,5,2,3], 5)); // [4]
console.log(targetIndices([1,2,5,2,3], 4)); // []
