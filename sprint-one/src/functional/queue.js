const Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let dequeueCount = 0;
  let count = 0;

  // {0: 'a', 1: 'b', 2: 'c'}

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count += 1;
  };

  someInstance.dequeue = function() {
     const result = storage[dequeueCount];
     delete storage[dequeueCount];
     dequeueCount += 1;
     return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
