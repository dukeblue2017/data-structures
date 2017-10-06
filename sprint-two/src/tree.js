var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push( Tree(value) );
};

treeMethods.contains = function(target) {
  if (arguments[1] !== undefined) {
    var useThis = arguments[1];
  } else {
    var useThis = this;
  }
  if (useThis.value === target) { return true; }

  for (var i = 0; i < useThis.children.length; i++) {
    // if (useThis.children[i].value === target) { return true; }
    // console.log(useThis.children[i])
    var currentNode = useThis.children[i];
    if (treeMethods.contains(target, currentNode)) {
      return true;
    }
  }




  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
