var LinkedList = function() {
  var obj = {};
  obj.head = null;
  obj.tail = null;

  obj.addToTail = function(value) {
    var newNode = Node(value);
    var oldTail = obj.tail;
    if (obj.tail === null && obj.head === null) {
      obj.head = newNode;
      obj.tail = newNode;
      obj.head.next = obj.tail;
    }
    if (obj.tail !== null && obj.head !== null) {
      obj.tail.next = newNode;
      obj.tail = newNode;
    }

  };

  obj.removeHead = function() {
    var oldHead = obj.head;

    if (obj.head !== null && obj.tail !== null) {
      obj.head = obj.head.next;
    }

    return oldHead.value;

  };


  obj.contains = function(target) {
    var contain = false;
    console.log(obj);
    for (var item in obj) {
      if (obj[item].value === target) {
        return true;
      }
    }
    return false;

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
