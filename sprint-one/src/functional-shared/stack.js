var Stack = function() {
  var obj = {};
  obj.count = 0;
  obj.storage = {};
  extend(obj, stackMethods);
  return obj;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count -= 1;
    const results = this.storage[this.count];
    delete this.storage[this.count];
    return results;
   }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
