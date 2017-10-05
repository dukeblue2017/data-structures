// I had to rewrite this on 10/05/2017. I finshed it on 10/04/2017 but forgot to push my commits.

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
