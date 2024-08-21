// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null; // initially, the tree is empty
  }

  insert(val, currentNode=this.root) {
    const newNode = new TreeNode(val);

    if (this.root === null) {
      // tree is empty, set root to new node
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (val < currentNode.val) {
        // go left
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        // go right
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentnode = currentNode.right;
      }
    }
  }

  search(val) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (val === currentNode.val) {
        return true; // found the value
      } else if (val < currentNode.val) {
        currentNode = currentNode.left; // search in left subtree
      } else {
        currentNode = currentNode.right; // search in right subtree
      }
    }

    return false; // value not found
  }


  preOrderTraversal(currentNode = this.root) {
    if (node === null) return;

    console.log(currentNode.val); // visit the current node
    this.preOrderTraversal(currentNode.left); // traverse the left subtree
    this.preOrderTraversal(currentNode.right); // traverse the right subtree
  }


  inOrderTraversal(currentNode = this.root) {
    if (node === null) return;

    this.inOrderTraversal(currentNode.left); // traverse the left subtree
    console.log(currentNode.val); // visit the current node
    this.inOrderTraveral(currentNode.right); // traverse the right subtree
  }


  postOrderTraversal(currentNode = this.root) {
    if (node === null) return;

    this.postOrderTraversal(currentNode.left); // traverse the left subtree
    this.postOrderTraversal(currentNode.right); // traverse the right subtree
    console.log(currentNode.val); // visit the current node
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
