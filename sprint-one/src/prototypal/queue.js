var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.sizeNum = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this [ this.sizeNum ] = value;
  this.sizeNum++;
};

queueMethods.dequeue = function() {
  if (this.sizeNum > 0) {
    this.sizeNum--;
    var dequeued = this[0];
    for (var i = 0; i < this.sizeNum; i++) {
      this[i] = this[ i + 1 ];
    }
    delete this[this.sizeNum + 1];
    return dequeued;

  }
};

queueMethods.size = function() {
  return this.sizeNum;
};