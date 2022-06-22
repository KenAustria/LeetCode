// Runtime: 114ms
// Time Complexity: O(n)
// Space Complexity: O(n)
// Memory: 44.5MB

const mergeTwoLists = (list1, list2) => {
  // initialize a dummy head node
  let mergedHead = { val: -1, next: null },
    // initialize a crtNode variable to keep track of the current node, starting with the dummy head node
    currentNode = mergedHead;

  // while there are still nodes to compare in two lists
  while (l1 && l2) {
    // if value of 2nd node is less than value of 1st node
    if (l1.val > l2.val) {
      // set the current node's link to l2 node
      currentNode.next = l2;
      // set the l2 node to l2's next node
      l2 = l2.next;
    } else {
      // set the current node's link to l1 node
      currentNode.next = l1;
      // set the l1 node to l1's next node
      l1 = l1.next;
    }
    // move on to the next node
    currentNode = currentNode.next;
  }

  // if one of the lists no longer have any nodes to compare, point currentNode's link to the remaining nodes in the other list
  // if both lists are empty, point currentNode's link to null
  currentNode.next = l1 || l2;

  // return merged linked list
  return mergedHead.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])); // []
console.log(mergeTwoLists([], [0])); // [0]
