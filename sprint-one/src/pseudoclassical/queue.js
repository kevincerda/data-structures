var Queue = function() {
	this.storage = {};
	this.count = 0;
	this.dequeueCount = 0;
}

Queue.prototype.enqueue = function(value) {
	this.storage[this.count] = value;
	this.count += 1;
};
Queue.prototype.dequeue = function() {
	const result = this.storage[this.dequeueCount];
	delete this.storage[this.dequeueCount];
	this.dequeueCount += 1;
	return result;
};
Queue.prototype.size = function() {
	return Object.keys(this.storage).length;
};

