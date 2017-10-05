// I had to rewrite this on 10/05/2017. I finshed it on 10/04/2017 but forgot to push my commits.
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.sizeNum = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.sizeNum] = value;
  this.sizeNum++;
};

stackMethods.pop = function() {
  if (this.sizeNum > 0) {
    this.sizeNum--;
    var popped = this[this.sizeNum];
    delete this[this.sizeNum];
  }
  return popped;
};

stackMethods.size = function() {
  return this.sizeNum;
};