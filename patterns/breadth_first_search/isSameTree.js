/*
    The given code is a JavaScript implementation of a function isSameTree that checks whether two binary trees are identical or not
using breadth-first search algorithm. The function takes two parameters, p and q, which are the root nodes of the first and second
binary trees, respectively. The function returns true if the two binary trees are identical and false otherwise.

    The function first checks if both trees are empty, in which case they are identical, and if only one tree is empty, then they are not
identical. If neither of the trees is empty, two queues are initialized with the root nodes of the input trees.

    The function then traverses both trees level by level using the BFS algorithm. At each level, it dequeues the front nodes from the two
queues and checks if the values of the front nodes are equal. If the values are not equal, the trees are not identical, and the function
returns false. If the values are equal, the function checks if the left child exists in both trees. If the left child exists in both trees,
the left child nodes are enqueued in their respective queues. If only one of them exists, the trees are not identical, and the function
returns false. Similarly, the function checks the right child nodes and enqueues them in their respective queues.

    If the function has traversed both trees completely and all the nodes have been dequeued and their values matched, the function returns
true, indicating that both trees are identical.

Time = O(min(n, m)) , Space = O(min(n, m))
    The time complexity of the isSameTree function is O(min(n, m)), where n and m are the number of nodes in the two trees. This is because
in the worst case, we need to visit all nodes in both trees to determine if they are identical. However, the function will return as soon
as it finds a pair of non-identical nodes, so the actual time taken may be less than O(min(n, m)).

    The space complexity of the function is also O(min(n, m)). This is because at any given time, the two queues will have at most min(n, m)
nodes (the number of nodes in the smaller tree). In the worst case, when the two trees are identical, the queues will be fully filled with
all the nodes in the smaller tree.
*/

const isSameTree = (p, q) => {
    // If both trees are empty, they are identical.
    if (!p && !q) return true;
  
    // If only one tree is empty, they are not identical.
    if (!p || !q) return false;
  
    // Initialize two queues with the root nodes of the input trees.
    const queueP = [p];
    const queueQ = [q];
  
    // Traverse both trees level by level using BFS.
    while (queueP.length && queueQ.length) {
      // Dequeue the front nodes from the two queues.
      const nodeP = queueP.shift();
      const nodeQ = queueQ.shift();
  
      // If the values of the front nodes are not equal, the trees are not identical.
      if (nodeP.val !== nodeQ.val) return false;
  
      // If the left child exists in both trees, enqueue them in the respective queues.
      if (nodeP.left && nodeQ.left) {
        queueP.push(nodeP.left);
        queueQ.push(nodeQ.left);
      } 
      // If only one of them exists, the trees are not identical.
      else if (nodeP.left || nodeQ.left) {
        return false;
      }
  
      // If the right child exists in both trees, enqueue them in the respective queues.
      if (nodeP.right && nodeQ.right) {
        queueP.push(nodeP.right);
        queueQ.push(nodeQ.right);
      } 
      // If only one of them exists, the trees are not identical.
      else if (nodeP.right || nodeQ.right) {
        return false;
      }
    }
  
    // If we've reached this point, the trees are identical.
    return true;
}
  