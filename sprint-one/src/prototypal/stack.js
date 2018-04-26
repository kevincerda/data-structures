var Stack = function() {
	var obj = Object.create(stackMethods);
	obj.storage = {};
	obj.count = 0;
	return obj;
};

var stackMethods = {};
stackMethods.push = function(value) {
	this.storage[this.count] = value;
	this.count += 1;
};
stackMethods.pop = function() {
	if (this.count > 0) {
		this.count -= 1;
		const result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}
};
stackMethods.size = function() {
	return Object.keys(this.storage).length;
};


