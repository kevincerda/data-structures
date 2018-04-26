var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
  };

  list.removeHead = function() {
    var removed = this.head;
    this.head = this.head.next;
    return removed.value;
  };

  list.contains = function(target) {
    return (Object.values(this.head).includes(target) || Object.values(this.tail).includes(target));
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
