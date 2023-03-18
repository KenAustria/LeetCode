/*
TIME AND SPACE COMPLEXITY
    Time = O(n), Space = O(1)
    The time complexity of this function is O(n), where n is the number of nodes in the linked list. This is because the function needs
to iterate through the entire linked list once in order to find the node to remove.

    The space complexity of this function is O(1), because the function only uses a constant amount of extra space to store the fast and
slow pointers. No additional data structures are used, so the space usage remains constant regardless of the size of the input.
*/

const removeNthFromEnd = (head, n) => {
    let fast = head;
    let slow = head;
  
    // Move fast pointer n nodes ahead of slow pointer
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
  
    // If fast pointer is null, remove head node
    if (fast === null) {
      return head.next;
    }
  
    // Move both pointers until fast pointer reaches end of list
    while (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
    }
  
    // Remove nth node from end by updating next pointer of (n-1)th node
    slow.next = slow.next.next;
  
    return head;
  };