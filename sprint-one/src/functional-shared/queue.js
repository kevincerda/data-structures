var Queue = function() {
	var obj = {};
	obj.count = 0;
	obj.dequeueCount = 0;
	obj.storage = {};
	extend(obj, queueMethods);
	return obj;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

const queueMethods = {};

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

