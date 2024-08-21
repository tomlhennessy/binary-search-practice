class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
      this.root = null;
  }

  insert(val) {
      const newNode = new TreeNode(val);

      if (this.root === null) {
          this.root = newNode;
          return;
      }

      let currentNode = this.root;
      while (true) {
          if (val < currentNode.val) {
              if (currentNode.left === null) {
                  currentNode.left = newNode;
                  return;
              }
              currentNode = currentNode.left;
          } else {
              if (currentNode.right === null) {
                  currentNode.right = newNode;
                  return;
              }
              currentNode = currentNode.right;
          }
      }
  }

  search(val) {
      let currentNode = this.root;

      while (currentNode !== null) {
          if (val === currentNode.val) {
              return true;
          } else if (val < currentNode.val) {
              currentNode = currentNode.left;
          } else {
              currentNode = currentNode.right;
          }
      }

      return false;
  }

  preOrderTraversal(node = this.root) {
      if (node === null) return;

      console.log(node.val);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
  }

  inOrderTraversal(node = this.root) {
      if (node === null) return;

      this.inOrderTraversal(node.left);
      console.log(node.val);
      this.inOrderTraversal(node.right);
  }

  postOrderTraversal(node = this.root) {
      if (node === null) return;

      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.val);
  }

  breadthFirstTraversal() {
      if (this.root === null) return;

      const queue = [this.root];

      while (queue.length > 0) {
          const currentNode = queue.shift();
          console.log(currentNode.val);

          if (currentNode.left !== null) {
              queue.push(currentNode.left);
          }
          if (currentNode.right !== null) {
              queue.push(currentNode.right);
          }
      }
  }

  depthFirstTraversal() {
    if (this.root === null) return;

    const stack = [this.root];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        console.log(currentNode.val);

        // Push left child first so that right child is processed first
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
        }
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }
      }
  }
}

module.exports = { BinarySearchTree, TreeNode };
