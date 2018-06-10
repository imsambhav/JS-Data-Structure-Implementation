function Node(data) {
  this.data = data;
  this.previous = null;
  this.next = null;
}

function DoublyLL() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

DoublyLL.prototype.add = function(data) {
  var node = new Node(data);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this.numberOfValues++;
};

DoublyLL.prototype.remove = function(data) {
  var current = this.head;
  while (current) {
    if (current.data === data) {
      if (current === this.head && current === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (current === this.head) {
        this.head = this.head.next;
        this.head.previous = null;
      } else if (current === this.tail) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        current.previous.next = current.next;
        current.next.previous = current.previous;
      }
      this.numberOfValues--;
    }
    current = current.next;
  }
};

DoublyLL.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
  while (current) {
    if (current.data === toNodeData) {
      var node = new Node(data);
      if (current === this.tail) {
        this.add(data);
      } else {
        current.next.previous = node;
        node.previous = current;
        node.next = current.next;
        current.next = node;
        this.numberOfValues++;
      }
    }
    current = current.next;
  }
};

DoublyLL.prototype.traverse = function(fn) {
  var current = this.head;
  while (current) {
    if (fn) {
      fn(current);
    }
    current = current.next;
  }
};

DoublyLL.prototype.traverseReverse = function(fn) {
  var current = this.tail;
  while (current) {
    if (fn) {
      fn(current);
    }
    current = current.previous;
  }
};

DoublyLL.prototype.length = function() {
  return this.numberOfValues;
};

DoublyLL.prototype.print = function() {
  var string = "";
  var current = this.head;
  while (current) {
    string += current.data + " ";
    current = current.next;
  }
  console.log(string.trim());
};

var doublyLL = new DoublyLL();
doublyLL.print(); // => ''

doublyLL.add(1);
doublyLL.add(2);
doublyLL.add(3);
doublyLL.add(4);
doublyLL.print(); // => 1 2 3 4
doublyLL.length(); // => 4

doublyLL.remove(3);
doublyLL.print(); // => 1 2 4
doublyLL.length(); // => 3

doublyLL.insertAfter(4, 2); // => 1 2 4 4

doublyLL.traverse(function(node) {
  node.data = node.data + 10;
});
doublyLL.print();

doublyLL.traverseReverse(function(node) {
  console.log(node.data);
});

doublyLL.print();
doublyLL.length();
