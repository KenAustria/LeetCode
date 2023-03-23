/*
TIME AND SPACE COMPLEXITY
    Time = O(n), Space = O(1)
    The time complexity of the deleteMiddleNode function is O(N), where N is the number of nodes in the linked list. The function uses
the Two Pointers technique to find the middle node of the linked list. The two pointers, slow and fast, traverse the linked list
simultaneously, with slow moving one step at a time and fast moving two steps at a time. When fast reaches the end of the linked list,
slow will be pointing to the middle node. The time complexity of this operation is O(N/2), which is equivalent to O(N).
    After finding the middle node, the function updates the next pointer of the previous node to remove the middle node. This operation
has a time complexity of O(1).
    The space complexity of the deleteMiddleNode function is O(1), which means that it uses a constant amount of additional memory to
execute regardless of the size of the input linked list. This is because the function only uses a few variables to traverse and update
the linked list, and these variables do not increase in size as the input linked list grows.
*/

// Define function deleteMiddleNode with head as parameter
const deleteMiddle = head => {
    // If head is null or there's only one node in the list, return head
    if (!head || !head.next) return null;
  
    // Initialize two pointers, slow and fast
    let slow = head;
    let fast = head.next.next;

    // Ensure that the loop will only run if there are at least two more nodes ahead of the current fast pointer.
    while (fast && fast.next) {
      // Traverse the list with two pointers  
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Delete the middle node
    slow.next = slow.next.next;
  
    // Return the head of the modified list
    return head;
};
  