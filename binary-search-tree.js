class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }
  
  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;
    let mid = parseInt((start + end) / 2);
    let root = new Node(array[mid]);

    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);
    return root;
  }
  
  minimumValue(current = this.root) {
    let minValue = current.data;
    while (current.left != null) {
      minValue = current.left.data;
      current = current.left;
    }
    return minValue;
  }
  
  insert(data, current = this.root) {
    if (current == null) {
      current = new Node(data);
      return current;
    }
    if (data < current.data) {
      current.left = this.insert(data, current.left);
    } else {
      current.right = this.insert(data, current.right);
    }
    return current;
  }
  
  remove(data, current = this.root) {
    if (current == null) return current;
      // console.log(current);

    if (data < current.data) {
      current.left = this.remove(data, current.left);
    } else if (data > current.data) {
      current.right = this.remove(data, current.right);

    } else {
     /* if (current.left == null && current.right == null) current;*/
      if (current.left == null) current.right;
      if (current.right == null) current.left;
      
      let succParent = current;
      let succ = current.right;
      while (succ.left != null) {
        succParent = succ;
        succ = succ.left;
      }
      if (succParent != current) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
        current.data = succ.data;
      }
    } 
    return current;
  }

  find(data, current = this.root) {

    if (current == null || data == current.data) {
      return current;
    }
    if (data < current.data) {
      return this.find(data, current.left);
      console.log("min");
    } else {
      return this.find(data, current.right);
    }
  }
  
  levelOrderIteration(callback) {
    if (this.root == null) return;
    let queue = [this.root];
    let visited = [];
    while (queue.length > 0) {
      let queueItem = queue.shift();
      if (queueItem == null) continue;
      visited.push(queueItem.data);
      if (queueItem.left) {
        queue.push(queueItem.left);
      }
      if (queueItem.right) {
        queue.push(queueItem.right);
      }
      if (callback) callback(queueItem);
    }
    if (!callback) return visited;
  }

  inOrder(callback, node = this.root, result = []) {
    if (node == null) return;
    this.inOrder(callback, node.left, result);
    result.push(node.data);
    if (callback) {
      callback(node);
    }
    this.inOrder(callback, node.right, result);
    return result;
  }
  
  preOrder(callback, node = this.root, result = []) {
    if (node == null) return;
    result.push(node.data);
    if (callback) {
      callback(node);
    }
    this.preOrder(callback, node.left, result, callback);
    this.preOrder(callback, node.right, result, callback);
    return result;
  }
  
  postOrder(callback, node = this.root, result = []) {
    if (node == null) return;
    this.preOrder(callback, node.left, result);
    this.preOrder(callback, node.right, result);
    result.push(node.data);
    if (callback) {
      callback(node);
    }
    return result;
  }
  
  height(current = this.root) {
    if (current == null) return 0;
    let leftHeight = this.height(current.left);
    let rightHeight = this.height(current.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  depth(searched, node = this.root, edges = 0) {
    if (node == null) return;
    if (searched == node.data) return edges;
    if (searched < node.data) {
      return this.depth(searched, node.left, edges + 1);
    } else {
      return this.depth(searched, node.right, edges + 1);

    }

  }
  
  isBalanced(node = this.root) {
    if (node == null) return true;
  
  let left = this.height(node.left);
  let right = this.height(node.right);

  let difference = Math.abs(left - right);
  
  if (difference <= 1 && this.isBalanced(node.left) == true && this.isBalanced(node.right) == true) return true;
  
  return false;
  }
  
  rebalance() {
    let balancedArr = this.inOrder();
    this.root = this.buildTree(balancedArr);
  }
}


const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};


// Random callback function
function timesTwo(item) {
  console.log(item.data * 2);
}

// create a new array
function createArray(amount, max) {
  let array = [];
  
  for (let i = 0; i < amount; i++) {
    let number = Math.floor(Math.random() * max) + 1;
    array.push(number);
  }
  return array;
}

// sort the array
function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;
  
  let left = mergesort(arr.slice(0, arr.length / 2+ arr.length % 2));
  let right = mergesort(arr.slice(-arr.length / 2));
  
  return merge(left, right);
}

// remove duplicates
function removeDupes(array) {
  let newArr = [];
  array.forEach((number) => {
    if (newArr.includes(number) == false) {
      newArr.push(number);
    }
  });
  return newArr;
}

/* Driver code */

let myArray = createArray(40, 100);
let sortedArray = mergesort(myArray);
let completeArray = removeDupes(sortedArray);

console.log(completeArray);

let myTree = new Tree(completeArray);

console.log("Tree balanced? " + myTree.isBalanced());

console.log(myTree.inOrder());
console.log(myTree.preOrder());
console.log(myTree.postOrder());
console.log(myTree.levelOrderIteration());

myTree.insert(125);
myTree.insert(194);
myTree.insert(176);
myTree.insert(155);
myTree.insert(180);

console.log("Tree balanced? " + myTree.isBalanced());

myTree.rebalance();

console.log("Tree balanced? " + myTree.isBalanced());

console.log(myTree.inOrder());
console.log(myTree.preOrder());
console.log(myTree.postOrder());
console.log(myTree.levelOrderIteration());

prettyPrint(myTree.root);