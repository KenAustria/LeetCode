// Runtime: 84ms
// Time complexity: O(n)
// Memory: 41.1MB
const intersect =(nums1, nums2) => {
  let numsQuantity = {}
  let matchingElementsArr = []

  for (let i of nums1) {
    numsQuantity[i] = numsQuantity[i] ? numsQuantity[i] + 1 : 1
  }

  for (let i of nums2) {
    if (numsQuantity[i]) {
      numsQuantity[i]--
      matchingElementsArr.push(i)
    }
  }

  return matchingElementsArr
};

console.log(intersect([1,2,2,1], [2,2])) // [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])) // [4,9] or [9,4]
