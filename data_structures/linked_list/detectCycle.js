/*
TIME AND SPACE COMPLEXITY
    Time = O(n), Space = O(1)
    The time complexity is O(n) because in the worst case, when there is no cycle, it will have to iterate through all n nodes of
the linked list. The algorithm uses two pointers to traverse the list, with the fast pointer moving two nodes at a time and the
slow pointer moving one node at a time. If there is a cycle, the two pointers will eventually meet, which takes O(n) time.

    The space complexity of the function is O(1) because it uses a constant amount of extra space for the two pointers and a few other
variables, regardless of the size of the input linked list.
*/

const detectCycle = (head) => {
    // If head or next node is null, no cycle exists in the linked list
    if (!head || !head.next) return null;
  
    // Initialize slow and fast pointers to head
    let slow = head;
    let fast = head;
  
    // Ensure that the loop will only run if there are at least two more nodes ahead of the current fast pointer
    while (fast && fast.next) {
        // Move slow pointer by one node and fast pointer by two nodes until they meet        
        slow = slow.next;
        fast = fast.next.next;

        // If slow and fast pointers meet, cycle exists in the linked list
        if (slow === fast) {
            // Initialize a new pointer to head and move it along with the slow pointer
            let start = head;
            while (start !== slow) {
                start = start.next;
                slow = slow.next;
            }
            // The node where start and slow pointers meet is the starting point of the cycle
            return start;
        }
    }
  
    // If slow and fast pointers don't meet, no cycle exists in the linked list
    return null;
};
  