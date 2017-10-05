var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeNum = 0;
};

Queue.prototype.enqueue = function(value) {
  this [ this.sizeNum ] = value;
  this.sizeNum++;
};


Queue.prototype.dequeue = function() {
  if (this.sizeNum > 0) {
    this.sizeNum--;
    var dequeued = this[0];
    for (var i = 0; i < this.sizeNum; i++ ) {
      this[i] = this[ i + 1 ];
    }
    delete this[ this.sizeNum ];
    return dequeued;
  }
};


Queue.prototype.size = function() {
  return this.sizeNum;
};

