var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.sizeNum = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this [ this.sizeNum ] = value;
  this.sizeNum++;
};


stackMethods.pop = function() {
  if (this.sizeNum > 0) {
    this.sizeNum--;
    var popped = this[ this.sizeNum ];
  }
  return popped;
};


stackMethods.size = function() {
  return this.sizeNum;
};