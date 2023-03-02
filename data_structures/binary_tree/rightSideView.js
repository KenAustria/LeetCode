/*
    This is a JavaScript function that takes a binary tree represented by its root node as an input and returns an array containing the
values of the nodes visible from the right side of the tree.

    The function first checks if the root node exists, and if not, returns an empty array.

    It then initializes a queue with the root node and an empty array called result to hold the final answer.

    The function then loops over the queue, processing each node in the queue in turn. For each node, it removes it from the front of the
queue using the shift() method, and if it is the rightmost node in its level, it pushes its value to the result array.

    It then adds the node's left and right children (if any) to the end of the queue using the push() method, so they can be processed in
the next iteration of the loop.

    Finally, the function returns the result array containing the values of the rightmost nodes at each level of the tree.

    Overall, the function performs a breadth-first search traversal of the binary tree, and for each level, it only adds the value of the
rightmost node to the result array. This ensures that the output array contains only the nodes that are visible from the right side of the
tree.

    Time = O(n) , Space = O(w)
    The time complexity of this function is O(n), where n is the number of nodes in the tree. This is because we traverse each node in the
tree once, and the time taken to process each node is constant.
    The space complexity of this function is O(w), where w is the maximum width of the tree. This is because we use a queue to store the
nodes at each level of the tree, and the maximum number of nodes in the queue at any given time is equal to the maximum number of nodes at
any level in the tree. Since the width of the tree can be at most n/2 (in the case of a complete binary tree), the space complexity is
O(n/2) = O(n).
*/

// Define a function to traverse a binary tree from right to left, and return an array
// containing the rightmost node values for each level of the tree.
const rightSideView = root => {
    // If the root is null, return an empty array.
    if (!root) return [];
    
    // Define a queue for breadth-first search and add the root node to it.
    const queue = [root];
    
    // Define an array to store the rightmost node values for each level of the tree.
    const result = [];
    
    // Loop while the queue is not empty.
    while (queue.length) {
        // Get the number of nodes in the current level of the tree.
        const size = queue.length;
        
        // Loop through all the nodes in the current level of the tree.
        for (let i = 0; i < size; i++) {
            // Get the next node in the queue.
            const node = queue.shift();
            
            // If the node is the rightmost node in the current level of the tree,
            // add its value to the result array.
            if (i === size - 1) result.push(node.val);
            
            // Add the left and right children of the current node to the queue
            // for processing in the next level of the tree.
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    // Return the result array containing the rightmost node values for each level of the tree.
    return result;
};
