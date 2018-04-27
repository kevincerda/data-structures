var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var node = new Tree(value);
	this.children.push(node);
};

treeMethods.contains = function(target) {
	var contains = false;
	if (this.value === target) {
		contains = true;
	}
	this.children.forEach(function(child) {
		if (child.contains(target)) {
			contains = true;
		}
	});
	return contains;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
