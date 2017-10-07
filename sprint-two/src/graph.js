

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = { };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.storage;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  for (var item in this.storage) {
    if (this.storage[item].hasOwnProperty(node)) {
      delete this.storage[item][node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  var x = false;
  var y = false;

  if (this.storage.hasOwnProperty(fromNode)) {
    if (this.storage[fromNode].hasOwnProperty(toNode)) {
      if (this.storage[toNode][fromNode] === 'edge') {
        x = true;
      }
      
    }
  }

  if (this.storage.hasOwnProperty(toNode)) {
    if (this.storage[toNode].hasOwnProperty(fromNode)) {
      if (this.storage[fromNode][toNode] === 'edge') {
        y = true;
      }
      
    }
  }
  return x && y;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  this.storage[fromNode][toNode] = 'edge';
  this.storage[toNode][fromNode] = 'edge';

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var item in this.storage) {
    cb(item);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 contains: O(1)
 removeNOde: O(n)
 hasEdge: O(1)
 addEdge: O(1)
 removeEdge: O(1)
 forEachNode: O(n)
 */


