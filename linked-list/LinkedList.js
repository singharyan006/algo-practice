const Node = require('./Node');

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // Adds a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Adds a new node to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.headNode;
    this.headNode = newNode;
  }

  // Returns the total number of nodes
  size() {
    let count = 0;
    let current = this.headNode;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Returns the first node
  head() {
    return this.headNode;
  }

  // Returns the last node
  tail() {
    if (!this.headNode) return null;

    let current = this.headNode;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  // Returns the node at a given index (0-based)
  at(index) {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
      if (count === index) return current;
      count++;
      current = current.next;
    }

    return null; // if index is out of bounds
  }

  // Removes the last element
  pop() {
    if (!this.headNode) return;

    if (this.headNode.next === null) {
      this.headNode = null;
      return;
    }

    let current = this.headNode;
    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
  }

  // Returns true if the value exists in the list
  contains(value) {
    let current = this.headNode;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  // Returns the index of the node with the value, or null
  find(value) {
    let index = 0;
    let current = this.headNode;
    while (current !== null) {
      if (current.value === value) return index;
      index++;
      current = current.next;
    }
    return null;
  }

  // Returns a string representation of the list
  toString() {
    let current = this.headNode;
    let str = '';
    while (current !== null) {
      str += `( ${current.value} ) -> `;
      current = current.next;
    }
    return str + 'null';
  }
}

module.exports = LinkedList;
