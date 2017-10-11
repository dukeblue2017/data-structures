var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype)
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};



BinarySearchTree.prototype.insert = function(value) {
	var node = BinarySearchTree(value);


	function insertNode(tree) {

		if (value > tree.value && tree.right === null) {
		  tree.right = node;
		} else if (value > tree.value) {
			insertNode(tree.right);
	  }


	  if (value < tree.value && tree.left === null) {
		  tree.left = node;
		} else if (value < tree.value) {
			insertNode(tree.left);
	  }

	}

	insertNode(this);
	
};


BinarySearchTree.prototype.contains = function(target) {
	if (target === this.value) {
		return true;
	}
	if (this.right && target > this.value) {
		return this.right.contains(target);
	}
	if (this.left && target < this.value) {
		return this.left.contains(target);
	}
	return false;


};


BinarySearchTree.prototype.depthFirstLog = function(callback) {
	callback(this.value);
	if (this.left) this.left.depthFirstLog(callback);
	if (this.right) this.right.depthFirstLog(callback);
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log)
 contains: O(log)
 depthFirstLog: 0(L)
 */
