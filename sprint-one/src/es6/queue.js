class Queue {
  constructor() {
  	this.storage = {};
  	this.count = 0;
  	this.dequeueCount = 0;
  }
  enqueue(value) {
  	this.storage[this.count] = value;
  	this.count += 1;
  };
  dequeue() {
  	const result = this.storage[this.dequeueCount];
  	delete this.storage[this.dequeueCount];
  	this.dequeueCount += 1;
  	return result;
  };
  size() {
  	return Object.keys(this.storage).length;
  };
}
