

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = { edges: [] };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.storage;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var toEdges = this.storage[toNode].edges;
  var fromEdges = this.storage[fromNode].edges;
  var toInFrom = false;
  var fromInTo = false;
  for (var i = 0; i < toEdges.length; i++) {
    if (toEdges[i] === fromNode) {
      fromInTo = true;
    }
  }
  for (var j = 0; j < fromEdges.length; j++) {
    if (fromEdges[j] === toNode) {
      toInFrom = true;
    }
  }

  return (toInFrom && fromInTo);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


