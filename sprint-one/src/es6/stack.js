class Stack {
  constructor() {
  	this.storage = {};
  	this.count = 0;
  }

  push(value) {
  	this.storage[this.count] = value;
  	this.count += 1;
  }

  pop() {
  	if (this.count > 0) {
	  	this.count -=1;
	  	const result = this.storage[this.count];
	  	delete this.storage[this.count];
	  	return result;
	  }
  }

  size() {
  	return Object.keys(this.storage).length;
  }
};