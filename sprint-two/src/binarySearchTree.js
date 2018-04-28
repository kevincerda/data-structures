var BinarySearchTree = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};
BinarySearchTree.prototype.insert = function(value) {
  var node = new BinarySearchTree(value);
  if (this.value > node.value) {
    (!this.left) ? this.left = node : this.left.insert(value);
  } else if (this.value < node.value) {
    (!this.right) ? this.right = node : this.right.insert(value);
  }
};
BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.left && value < this.value) {
    if (this.left.contains(value)) {
      return true;
    }
  } else if (this.right && value > this.value) {
    if (this.right.contains(value)) {
      return true;
    }
  }
  return false;
};
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 * O(n) - Linear time;
 */

