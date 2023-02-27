/*
    The solution is a recursive function that uses depth-first search to traverse the tree and find the maximum depth. It traverses the
left and right subtrees of the root node. The function returns the maximum depth of the tree. 
    
    The function takes the root of the tree as its parameter. The base case is when the root node is null, in which case the function
returns 0. The function then recursively calls itself on the left and right child nodes of the current node, and returns the maximum of
the two values plus 1. The plus 1 accounts for the current node in the count. This process continues until all leaf nodes have been
visited, and the function returns the maximum depth of the tree.

Time: O(n), Space: O(n)
    The time complexity of this solution is O(n), where n is the number of nodes in the binary tree, because it visits each node once.
    
    The space complexity of this solution is O(h), where h is the height of the binary tree, because the function calls itself 
recursively for each child node until it reaches a leaf node. Since the maximum number of function calls on the call stack at any given
time is equal to the height of the binary tree, the space complexity is O(h).
*/

// truthy ternary comparison
const maxDepth = root => root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0

console.log(`The max depth of [3,9,20,null,null,15,7] is : ${maxDepth([3, 9, 20, null, null, 15, 7])}`); // 3
console.log(`The max depth of [1,null,2] is : ${maxDepth([1, null, 2])}`); // 2