function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLL() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLL.prototype.add = function(data) {
  var node = new Node(data);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }

  this.numberOfValues++;
};

SinglyLL.prototype.remove = function(data) {
  var previous = this.head;
  var current = this.head;

  while (current) {
    if (current.data === data) {
      if (current === this.head) {
        this.head = this.head.next;
      }
      if (current === this.tail) {
        this.tail = previous;
      }
      previous.next = current.next;
      this.numberOfValues--;
    } else {
      previous = current;
    }

    current = current.next;
  }
};

SinglyLL.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
  while (current) {
    if (current.data === toNodeData) {
      var node = new Node(data);
      if (current === this.tail) {
        this.tail.next = node;
        this.tail = node;
      } else {
        node.next = current.next;
        current.next = node;
      }
      this.numberOfValues++;
    }
    current = current.next;
  }
};

SinglyLL.prototype.traverse = function(fn) {
  var current = this.head;
  while (current) {
    if (fn) {
      fn(current);
    }
    current = current.next;
  }
};

SinglyLL.prototype.length = function() {
  return this.numberOfValues;
};

SinglyLL.prototype.print = function() {
  var string = "";
  var current = this.head;
  while (current) {
    string += current.data + " ";
    current = current.next;
  }
  console.log(string.trim());
};

var sll = new SinglyLL();
sll.print();
sll.add(1);
sll.add(2);
sll.add(3);
sll.print(); // => 1 2 3

sll.length(); // => 3
sll.remove(3);
sll.print(); // => 1 2
sll.remove(13); // remove non existing value

sll.remove(1); // remove head
sll.print(); // 2 3
sll.remove(2); // remove tail

/////////////////////////////////////////////////////

sll.add(1);
sll.add(2);
sll.add(3);
sll.insertAfter(13, 2); // 1 2 13 3

sll.traverse(function(node) {
  node.data = node.data + 10;
});
sll.print(); // 11 12 23 13
sll.length(); // 4
