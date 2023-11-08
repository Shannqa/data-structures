//[ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    let node = new Node(value);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    //adds a new node containing value to the end of the list
    this.size++;

  }
  prepend(value) {
    //adds a new node containing value to the start of the list
  }
  getSize() {
    return this.size;
    //returns the total number of nodes in the list
  }
  getHead() {
    //returns the first node in the list
    return this.head;
  }
  tail() {
    //returns the last node in the list
  }
  at(index) {
    //returns the node at the given index
  }
  pop() {
    //removes the last element from the list
  }
  contains(value) {
    //returns true if the passed in value is in the list and otherwise returns false.
  }
  find(value) {
    //returns the index of the node containing value, or null if not found.
  }
  toString() {
    let string = "";
    let current = this.head;

    while (current) {
      string = string + "( " + current.value + " ) -> ";
      current = current.next;
    }
    string = string + "null";
    return string;
    //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  }
}


// full list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// class / factory, containing a value property and a link to the nextNode, set both as null by default.

//let node = LinkedList.append("lalala");

/*
let node1 = new Node("value 1");
let node2 = new Node("value 2");
node1.next = node2;
console.log(node1);
console.log(node2);

*/
let list = new LinkedList();

list.append("5");
list.append("bzz");
console.log(list);
console.log(list.getSize());
console.log(list.toString());
console.log(list.getHead());