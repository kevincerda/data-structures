const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count += 1;
  };

  someInstance.pop = function() {
    if (count > 0) {
      count -= 1;
      const result = storage[count];
      delete storage[count];
      return result;
    }
  };

  someInstance.size = function() {
    return count;
  };
  
  return someInstance;
};
