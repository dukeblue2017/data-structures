var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeNum = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    sizeNum++;
    storage[sizeNum] = value;
  };

  someInstance.pop = function() {
    if (sizeNum > 0) {
      var popped = storage[sizeNum];
      delete storage[sizeNum];
      sizeNum--;
    }
    return popped;
  };

  someInstance.size = function() {
    return sizeNum;
  };

  return someInstance;
};
