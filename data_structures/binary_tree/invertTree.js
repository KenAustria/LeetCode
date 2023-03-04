/*
    This is a function that performs an operation on a binary tree using Breadth First Search (BFS) algorithm. The input is the root
node of a binary tree. The function first checks if the root is empty. If it is, the function returns the empty root. If the root node
is not empty, the function defines a queue and pushes the root node to it.

    The while loop runs as long as the queue is not empty. For each iteration, the first node is dequeued (i.e., removed) from the queue.
The left and right child nodes of the current node are swapped by temporarily storing the left child node in a variable, swapping the nodes,
and assigning the variable value to the right child node.

    If the left child node exists, it is added to the end of the queue. Similarly, if the right child node exists, it is added to the end
of the queue. Finally, the function returns the root node of the inverted tree.

    This is breadth first search because the algorithm explores all nodes in the tree level by level, from top to bottom. The algorithm
uses a queue data structure to keep track of nodes to explore, starting from the root node.

    The algorithm dequeues nodes from the front of the queue, and for each node, swaps its left and right children. Then, it enqueues the
left and right children (if they exist) to the back of the queue. This ensures that the next level of the tree is explored in the correct
order. The process continues until the queue is empty, and the inverted tree is returned.

    By using a queue data structure, this algorithm explores nodes level by level, making it a breadth first search traversal of the tree.

Time = O(n), Space = O(n)
    The time complexity of this code is O(n), where n is the number of nodes in the binary tree. This is because the algorithm has to visit
every node in the tree exactly once to invert it. Specifically, the while loop iterates once for each node in the tree.

    The space complexity of the code is also O(n), where n is the number of nodes in the binary tree. This is because the code uses a queue
to store the nodes of the tree, and the size of the queue can grow to at most the number of nodes in the tree. In the worst case, when the
binary tree is a complete binary tree, the size of the queue would be n/2, which is still O(n).
*/

const invertTree = root => {
    // If tree is empty, return the root
    if (!root) return root;

    // Define a queue and push the root to it
    let queue = [root];

    // While the queue is not empty, traverse the tree
    while (queue.length > 0) {
        // Pop the first node from the queue
        let node = queue.shift();

        // Swap the left and right nodes of the current node
        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        // If the left node exists, push it to the queue
        if (node.left) queue.push(node.left);

        // If the right node exists, push it to the queue
        if (node.right) queue.push(node.right);
    }

    // Return the root of the inverted tree
    return root;
};

/*  HOW VALUES CHANGE WITH EACH ITERATION
    The invertTree function takes in a binary tree represented as a root node and returns the same tree with all left and 
right child nodes swapped. Here's how the input tree root = [4,2,7,1,3,6,9] is transformed with each iteration of the while loop:

    Iteration 1:
    queue = [4]
    node = 4
    Swap the left and right child nodes of node
    node = { val: 4, left: 7, right: 2 }
    Add the left and right child nodes of node to queue
    queue = [7, 2]

    Iteration 2:
    queue = [7, 2]
    node = 7
    Swap the left and right child nodes of node (there are no child nodes to swap)
    Add the left and right child nodes of node to queue (there are no child nodes to add)
    node = 2
    Swap the left and right child nodes of node
    node = { val: 2, left: 9, right: 6 }
    Add the left and right child nodes of node to queue
    queue = [2, 9, 6]

    Iteration 3:
    queue = [2, 9, 6]
    node = 2
    Swap the left and right child nodes of node (there are no child nodes to swap)
    Add the left and right child nodes of node to queue (there are no child nodes to add)
    node = 9
    Swap the left and right child nodes of node (there are no child nodes to swap)
    Add the left and right child nodes of node to queue (there are no child nodes to add)
    node = 6
    Swap the left and right child nodes of node (there are no child nodes to swap)
    Add the left and right child nodes of node to queue (there are no child nodes to add)
    queue = [9, 6]

    Iteration 4:
    queue = [9, 6]
    node = 9
    Swap the left and right child nodes of node (there are no child nodes to swap)
    Add the left and right child nodes of node to queue (there are no child nodes to add)
    node = 6
    Swap the left and right child nodes of node (there are no child nodes to swap)
    Add the left and right child nodes of node to queue (there are no child nodes to add)
    queue = [6]

    Iteration 5:
    queue = [6]
    node = 6
    Swap the left and right child nodes of node (there are no child nodes to swap)
    Add the left and right child nodes of node to queue (there are no child nodes to add)
    queue = []

    The while loop exits when the queue is empty, and the function returns the original root node with all left and right child nodes
swapped, which is [4,7,2,9,6,3,1].
*/

// --------------------------------------------------------------------------------------------------------------------

/*
DFS
    The invertTree function takes the root of a binary tree as input and returns the root of the inverted tree. The function first checks
if the root is null or not. If the root is null, the function returns the root.

    If the root is not null, the function defines an empty stack and pushes the root to it. It then enters a while loop that continues
until the stack is empty. During each iteration of the loop, the function pops the last node from the stack and swaps its left and right
child nodes. If the left child node exists, the function pushes it to the stack. Similarly, if the right child node exists, the function
pushes it to the stack.

    By swapping the left and right child nodes of each node in the tree, the function effectively inverts the binary tree. The function
then returns the root of the inverted tree.

    This is depth first search because it traverses the tree by exploring as far as possible along each branch before backtracking. 
Specifically, it uses an iterative approach to traverse the tree in a postorder traversal. The algorithm swaps the left and right nodes
of each node as it is popped off the stack, and then pushes any non-null left and right children onto the stack. By processing the right
child first, it ensures that the left subtree is fully processed before moving on to the right subtree. This approach can be thought of
as "depth-first" because it fully explores the depth of each branch before moving on to another branch.

Time = O(n), Space = O(d)
    The time complexity of invertTree is O(n), where n is the number of nodes in the tree. This is because the function visits every node
in the tree once and performs constant time operations on each node.

    The space complexity of invertTree is O(d), where d is the maximum depth of the tree. This is because the function uses a stack to
keep track of nodes to visit and at any given time the stack will contain at most d nodes, which corresponds to the depth of the deepest
path in the tree. Therefore, the space complexity of the function is proportional to the height of the tree, rather than the number of
nodes in the tree.
*/

const invertTree = root => {
    // If tree is empty, return the root
    if (!root) return root

    // Define a stack and push the root to it
    let stack = [root]

    // While the stack is not empty, traverse the tree
    while (stack.length > 0) {
        // Pop the last node from the stack
        let node = stack.pop()

        // Swap the left and right nodes of the current node
        let temp = node.left
        node.left = node.right
        node.right = temp

        // If the left node exists, push it to the stack
        if (node.left) stack.push(node.left)

        // If the right node exists, push it to the stack
        if (node.right) stack.push(node.right)
    }

    // Return the root of the inverted tree
    return root
}
