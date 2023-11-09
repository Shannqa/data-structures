class LinkedList {
  // full list

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
    let node = new Node(value);
    let currentHead = this.head;
    node.next = currentHead;
    this.head = node;
    this.size++;

    //adds a new node containing value to the start of the list
  }
  
  getSize() {
    return this.size;
    //returns the total number of nodes in the list
  }
  
  getHead() {
    return this.head;
    //returns the first node in the list
  }
  
  getTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
    //returns the last node in the list
  }
  
  at(index) {
    let current = this.head;
    let id = 0;

    while (current) {
      if (index == id) {
        return current;
      }
      current = current.next;
      id++;
    }
    return "Not found";
    //returns the node at the given index
  }
  
  pop() {
    let current = this.head;
    let previous;
    if (current.next == null) {
      this.head = null;
      return "List emptied"
    }
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
    //removes the last element from the list
  }
  
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
    }
    return false;
    //returns true if the passed in value is in the list and otherwise returns false.
  }
  
  find(value) {
    let current = this.head;
    let id = 0;
    while (current) {
      if (current.value == value) {
        return id;
      }
      id++;
      current = current.next;
    }
    return "Not found";
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
  
  insertAt(value, index) {
    let node = new Node(value);
    let current = this.head;
    let previous;
    let id = 0;

    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else if (this.head == null) {
      return console.log("Wrong index, the list is empty.");
    } else { // 0 1 2
      current = this.head;
      while (current) { 
        previous = current; 
        current = current.next; 
        id++; 
        console.log(id);

        if (index == id) { 
          previous.next = node;
          node.next = current;
          this.size++;
        }
      }
      return console.log("Wrong index");
    }
  //that inserts a new node with the provided value at the given index.
  }
  
  removeAt(index) {
    let id = 0;
    let current = this.head;
    let previous;
    while (current) {
      if (index == 0) {
        this.head = current.next;
        return;
      }
      if (id == index) { 
        console.log(previous);
        previous.next = current.next;
        return;
      }
      previous = current;
      current = current.next;
      id++;
    }
    //that removes the node at the given index.
  }
}

class Node {
  // class / factory, containing a value property and a link to the nextNode, set both as null by default.

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let list = new LinkedList();

list.append("5");
list.append("bzz"); 
list.append("nanana");
/*
console.log(list);
console.log(list.getSize());
console.log(list.toString());
console.log(list.getHead());
list.prepend("new head");
console.log(list.toString());
console.log(list.getTail());
console.log(list.at(1));*/

//list.pop();
//console.log(list.contains("bzz"));
//console.log(list.find("bzz"));

//list.insertAt("ooo", 5);

list.removeAt(2);


console.log(list.toString());

