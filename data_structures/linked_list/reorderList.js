/*
TIME AND SPACE COMPLEXITY
    Time = O(n), Space = O(1)
    The time complexity of this function is O(n), where n is the number of nodes in the linked list. The function goes through
the linked list three times: first to find the middle node, second to reverse the second half of the linked list, and third to
merge the first and second halves of the linked list. Each of these three passes takes O(n/2) time, which simplifies to O(n) time.

    The space complexity of this function is O(1). The function uses only a constant amount of extra space for variables like slow,
fast, prev, curr, p1, p2, and temp1. The function modifies the input linked list in place and does not create any new data structures
with a size proportional to the input size.
*/

const reorderList = (head) => {
    if (!head || !head.next) return head;
  
    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half of the linked list
    let prev = null;
    let curr = slow.next;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    slow.next = null;
  
    // Merge the first half and the reversed second half of the linked list
    let p1 = head;
    let p2 = prev;
    while (p2) {
      let temp1 = p1.next;
      let temp2 = p2.next;
      p1.next = p2;
      p2.next = temp1;
      p1 = temp1;
      p2 = temp2;
    }
    return head;
  };
  