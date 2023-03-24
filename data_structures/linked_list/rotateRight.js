/*
TIME AND SPACE COMPLEXITY
    Time = O(n), Space = O(1)
    The time complexity of this function is O(n), where n is the length of the linked list. The function iterates through the
linked list twice: once to find the length of the list and again to find the new tail. The length of the list is used to calculate
the index of the new tail, which takes O(n) time in the worst case.

    The space complexity is O(1), which means the amount of memory used by the function is constant and does not depend on the size
of the input. The function only uses a few variables to keep track of the current node, the length of the list, and the new head and
tail nodes. Therefore, the space complexity remains constant as the size of the input increases.
*/


// Rotate a linked list to the right by k places
const rotateRight = (head, k) => {
    if (!head) return null
    
    // Get length of linked list and its tail
    let length = 1;
    let tail = head;
    while (tail.next) {
        length++;
        tail = tail.next;
    }
    
    // Calculate actual rotation amount and check if no rotation needed
    // Modulated because if k is greater than or equal to the length of the linked list, 
    // it means that the list will rotate by at least one full rotation, which is equivalent to not rotating the list at all.
    k %= length;
    if (k === 0) return head;
    
    // Find new tail node and head node
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    
    // Disconnect new tail from new head and connect tail to old head
    newTail.next = null;
    tail.next = head;
    
    return newHead;
};