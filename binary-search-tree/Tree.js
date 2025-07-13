import Node from './Node.js';

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const sorted = [...new Set(array)].sort((a, b) => a - b);
    return this.buildBalancedTree(sorted);
  }

  buildBalancedTree(sorted) {
    if (!sorted.length) return null;

    const mid = Math.floor(sorted.length / 2);
    const root = new Node(sorted[mid]);

    root.left = this.buildBalancedTree(sorted.slice(0, mid));
    root.right = this.buildBalancedTree(sorted.slice(mid + 1));

    return root;
  }

  insert(value, root = this.root) {
    if (root === null) return new Node(value);

    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else if (value > root.data) {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  deleteItem(value, root = this.root) {
    if (root === null) return null;

    if (value < root.data) {
      root.left = this.deleteItem(value, root.left);
    } else if (value > root.data) {
      root.right = this.deleteItem(value, root.right);
    } else {
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      const minLargerNode = this.findMin(root.right);
      root.data = minLargerNode.data;
      root.right = this.deleteItem(minLargerNode.data, root.right);
    }
    return root;
  }

  findMin(node) {
    while (node.left !== null) node = node.left;
    return node;
  }

  find(value, root = this.root) {
    if (!root || root.data === value) return root;
    return value < root.data
      ? this.find(value, root.left)
      : this.find(value, root.right);
  }

  levelOrderForEach(callback) {
    if (!callback) throw new Error("Callback is required");
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback is required");
    if (node === null) return;
    this.inOrderForEach(callback, node.left);
    callback(node);
    this.inOrderForEach(callback, node.right);
  }

  preOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback is required");
    if (node === null) return;
    callback(node);
    this.preOrderForEach(callback, node.left);
    this.preOrderForEach(callback, node.right);
  }

  postOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback is required");
    if (node === null) return;
    this.postOrderForEach(callback, node.left);
    this.postOrderForEach(callback, node.right);
    callback(node);
  }

  height(value) {
    const node = this.find(value);
    if (!node) return null;

    const getHeight = (node) => {
      if (!node) return -1;
      return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    };

    return getHeight(node);
  }

  depth(value, node = this.root, depthCount = 0) {
    if (!node) return null;
    if (node.data === value) return depthCount;

    if (value < node.data) return this.depth(value, node.left, depthCount + 1);
    return this.depth(value, node.right, depthCount + 1);
  }

  isBalanced(root = this.root) {
    if (!root) return true;

    const height = (node) => {
      if (!node) return -1;
      return 1 + Math.max(height(node.left), height(node.right));
    };

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    const balanced =
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(root.left) &&
      this.isBalanced(root.right);

    return balanced;
  }

  rebalance() {
    const values = [];
    this.inOrderForEach((node) => values.push(node.data));
    this.root = this.buildBalancedTree(values);
  }
}
