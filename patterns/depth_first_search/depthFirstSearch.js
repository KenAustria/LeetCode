export default function depthFirstSearch(graph, source) {
	// case for no nodes in graph
	if (Object.keys(graph).length === 0) return []

	// initialize set that tracks visited nodes
	const visited = new Set();

	// recursive fn
	function traverse(node) {
		// ignore visited nodes
		if (visited.has(node)) return
		// else, add node
		visited.add(node);
		// recursively visit each neighbor
		graph[node].forEach((neighbor) => traverse(neighbor));
	}

	// traverse from source
	traverse(source);

	// visited nodes is the traversal order
	return Array.from(visited);
}
