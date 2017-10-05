var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeNum = 0;
};


Stack.prototype.push = function(value) {
  this [ this.sizeNum ] = value;
  this.sizeNum++;
};

Stack.prototype.pop = function() {
  if (this.sizeNum > 0) {
    this.sizeNum--;
    var popped = this [ this.sizeNum ];
    delete this [ this.sizeNum ];
    return popped;

  }
};

Stack.prototype.size = function() {
  return this.sizeNum;
};

var firstStack = new Stack();