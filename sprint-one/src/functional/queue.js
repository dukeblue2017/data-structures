var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeNum = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[sizeNum] = value;
    sizeNum++;
    
  };

  someInstance.dequeue = function() {
    if (sizeNum > 0) {
      var dequeued = storage[0];
      delete storage[sizeNum];
      sizeNum--;
      for (var i = 0; i <= sizeNum; i++) {
        storage[i] = storage[ i + 1 ];
      }
    }
    return dequeued;
  };

  someInstance.size = function() {
    return sizeNum;
  };

  return someInstance;
};
