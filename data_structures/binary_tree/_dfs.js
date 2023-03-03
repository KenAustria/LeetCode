/*
    This is a recursive implementation that takes in a node to start the search from, and a set to keep track of visited nodes.

    The algorithm begins by marking the current node as visited and then processing it (performing some operation on it). Then it
traverses all adjacent nodes of the current node, and if an adjacent node has not been visited, it recursively calls dfs() on that node.

    This algorithm can be easily adapted to solve various problems by modifying the operation performed on each node or adding additional
conditions for visiting nodes.
*/

const dfs = (node, visited) => {
    // Mark current node as visited
    visited.add(node);
  
    // Do something with current node
    // ...
  
    // Traverse adjacent nodes
    for (let adj of node.adjacents) {
      if (!visited.has(adj)) {
        dfs(adj, visited);
      }
    }
  };
  