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
    let mid = parseInt(Math.floor((start + end) / 2));
    let root = new Node(arr[mid]);

    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
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
  
  height() {
    
  }
  
  depth() {
    
  }
  
  isBalanced() {
    
  }
  
  rebalance() {
    
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





let arr = [1, 4, 8, 10, 15, 23, 35, 47, 50, 67, 75, 81, 89, 92, 97];


let tree = new Tree(arr);

/*console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.levelOrderIteration());*/
//tree.insert(25);


//tree.remove(4);
//console.log(tree.levelOrderIteration());

//prettyPrint(tree.root);
//console.log(tree.find(81));

//console.log(tree.minimumValue());


function timesTwo(item) {
  console.log(item.data * 2);
}

//tree.levelOrderIteration(timesTwo);
console.log(tree.inOrder());

tree.postOrder(timesTwo);

