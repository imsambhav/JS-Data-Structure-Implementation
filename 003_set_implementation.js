function Set() {
  this.values = [];
  this.numberOfValues = 0;
}

Set.prototype.add = function(value) {
  if (!~this.values.indexOf(value)) {
    this.values.push(value);
    this.numberOfValues++;
  }
};

Set.prototype.remove = function(value) {
  var index = this.values.indexOf(value);
  if (~index) {
    this.values.splice(index, 1);
    this.numberOfValues--;
  }
};

Set.prototype.contains = function(value) {
  return this.values.indexOf(value) !== -1;
};

Set.prototype.union = function(set) {
  var newSet = new Set();
  set.values.forEach(function(value) {
    newSet.add(value);
  });
  return newSet;
};

Set.prototype.intersect = function(set) {
  var newSet = new Set();
  this.values.forEach(function(value) {
    if (set.contains(value)) {
      newSet.add(value);
    }
  });
  return newSet;
};

Set.prototype.difference = function(set) {
  var newSet = new Set();
  this.values.forEach(function(value) {
    if (!set.contains(value)) {
      newSet.add(value);
    }
  });
  return newSet;
};

Set.prototype.isSubset = function(set) {
  return set.values.every(function(value) {
    return this.contains(value);
  }, this);
};

Set.prototype.length = function() {
  return this.numberOfValues;
};

Set.prototype.print = function() {
  console.log(this.values.join(" "));
};

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.print();
set.remove(3);
set.print();
set.contains(3); // true
console.log("//////////////////////");
var set1 = new Set();
set1.add(1);
set1.add(2);
var set2 = new Set();
set2.add(2);
set2.add(3);

var set3 = set2.union(set1);
set3.print(); // 1 2

var set4 = set2.intersect(set1);
set4.print(); // 2

var set5 = set.difference(set3);
set5.print();

var set6 = set3.difference(set);
set6.print();

set.isSubset(set1); // true
set1.isSubset(set);

set1.length();
set3.length();
