var LinkedList = function() {
  var obj = {};
  obj.head = null;
  obj.tail = null;

  obj.addToTail = function(value) {
    obj[ value ] = obj [ obj.tail ];
    var newTail = Node(value);
    obj.tail = newTail;
  };

  obj.removeHead = function() {
    console.log(obj[obj.head]);
    var temp = obj[ obj.head ];
    obj.head = Node(temp);
    return temp;
  };

  obj.contains = function(target) {
    return target in obj;
  };

  return obj;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 */
