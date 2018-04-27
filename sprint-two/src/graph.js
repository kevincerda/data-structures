

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this[node] = {edges: {}};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return !!this[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	if (this.contains(node)) {
		for (let linkedNode in this[node].edges) {
			this.removeEdge(node, linkedNode);
		}
		delete this[node];
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return Object.keys(this[fromNode].edges).includes(toNode.toString());
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	if (this.contains(fromNode) && this.contains(toNode)) {
		this[fromNode].edges[toNode] = true;
		this[toNode].edges[fromNode] = true;
	}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if (this.contains(fromNode) && this.contains(toNode)) {
		delete this[fromNode].edges[toNode];
		delete this[toNode].edges[fromNode];
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (let keys in this) {
		if (typeof this[keys] !== 'function') {
			cb(keys);
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


