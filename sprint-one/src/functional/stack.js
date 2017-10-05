var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeNum = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[sizeNum] = value;
    sizeNum++;

  };

  someInstance.pop = function() {
    if (sizeNum > 0) {
      sizeNum--;
      
      var popped = storage[sizeNum];
      delete storage[sizeNum];
    }
    return popped;
  };

  someInstance.size = function() {
    return sizeNum;
  };

  return someInstance;
};
