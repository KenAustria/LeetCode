/* 
This is a JavaScript algorithm that counts the number of paths in a binary tree that sum up to a given target value S.

The algorithm consists of two functions: count_paths and count_paths_recursive.
 
    The count_paths function takes the root node of the binary tree and the target sum S as input parameters, and returns
the total number of paths in the tree that add up to S.

    The count_paths_recursive function is a helper function that recursively counts the number of valid paths that end at
the current node and its child nodes.

    The count_paths_recursive function has an optional fourth parameter pathSum that is used to keep track of the sum of 
values along the current path being explored in the binary tree. When count_paths calls count_paths_recursive for the
first time, it passes an empty array as the currentPath argument. However, the pathSum argument is initialized to 0 in 
the function signature to ensure that the pathSum variable is defined and can be used in the recursive function calls.
So, even though count_paths passes only 3 arguments to count_paths_recursive, the function definition allows for an 
optional 4th argument. If the 4th argument is not passed, it defaults to 0.

    If the currentNode is null, it means that there are no more nodes to traverse, so the function returns 0. If the 
currentNode is not null, the function adds the value of the currentNode to the pathSum and checks if pathSum
equals S. If it does, the function increments the pathCount variable.

    Then, the function recursively calls itself for the left and right child nodes of the currentNode, passing in the 
updated pathSum. The pathCount is incremented by the returned values of these recursive calls.

    Finally, the function removes the value of the currentNode from the pathSum and returns the pathCount variable, 
which represents the number of valid paths that end at the current node and its child nodes.

Time: O(n), Space: O(h)

    The time complexity of the count_paths function is O(N^2) in the worst case, where N is the number of nodes in the 
binary tree. This is because for each node in the tree, the function checks all possible paths that start from that node
to determine if they sum to S. In the worst case, every node in the tree could be the starting point for a valid path that
sums to S, and for each node, the function will traverse all the way down to the leaf nodes, resulting in a time complexity
of O(N^2).

    The space complexity of the count_paths function is O(N) in the worst case, where N is the number of nodes in the binary
tree. This is because the function creates a new array currentPath for each recursive call, which can potentially hold all 
nodes in the tree. Additionally, the function has a recursive call stack that can hold up to N nodes in the worst case, where
each node represents a function call. The space complexity of count_paths_recursive is O(1), since it only uses a constant 
amount of additional space for the pathCount and pathSum variables.
*/

const count_paths = (root, S) => {
    return count_paths_recursive(root, S, []);
}
  
const count_paths_recursive = (currentNode, S, currentPath, pathSum = 0) => {
    if (!currentNode) {
        return 0;
    }

    // Add the current node value to the current path sum
    pathSum += currentNode.val;

    // Count the number of valid paths that end at the current node
    let pathCount = pathSum === S ? 1 : 0;

    // Recursively count the number of valid paths for the left and right subtrees
    pathCount += count_paths_recursive(currentNode.left, S, currentPath, pathSum);
    pathCount += count_paths_recursive(currentNode.right, S, currentPath, pathSum);

    // Remove the current node value from the current path sum before returning
    pathSum -= currentNode.val;

    return pathCount;
}

console.log(`The binary tree has a count of ${count_paths([1, 7, 9, 6, 5, 2, 3])} paths that are equal to the sum`); // 3
console.log(`The binary tree has a count of ${count_paths([12, 7, 1, 4, 10, 5])} paths that are equal to the sum`); // 2