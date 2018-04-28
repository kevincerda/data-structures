var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
	const tuple = [k, v];
	if (bucket) {
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === k) {
				bucket[i] = tuple;
			} else {
			  bucket.push(tuple)
			}
		}
	} else {
		this._storage.set(index, []);
		var bucket = this._storage.get(index);
		bucket.push(tuple);
	}
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  const bucketVal = bucket.filter(function(tuple) {
  	return tuple.includes(k);
  });
  return bucketVal.length > 0 ? bucketVal[0][1] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  const bucket = this._storage.get(index);
  const newBucket = bucket.filter(function(tuple) {
  	return (!tuple.includes(k));
  });
  this._storage.set(index, newBucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


