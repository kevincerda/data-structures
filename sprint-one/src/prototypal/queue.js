var Queue = function() {
	var someInstance = Object.create(queueMethods);
	someInstance.storage = {};
	someInstance.count = 0;
	someInstance.dequeueCount = 0;
	return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
	this.storage[this.count] = value;
	this.count += 1;
};
queueMethods.dequeue = function() {
	const result = this.storage[this.dequeueCount];
	delete this.storage[this.dequeueCount];
	this.dequeueCount += 1;
	return result;
};
queueMethods.size = function() {
	return Object.keys(this.storage).length;
};

