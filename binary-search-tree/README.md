# 🌳 Binary Search Tree (BST) — The Odin Project

A Binary Search Tree (BST) is a hierarchical data structure where each node has:
- At most two children
- Left child < Parent
- Right child > Parent

This project implements a **balanced BST** from scratch and covers all common operations.

---

## 📚 Node & Tree Overview

### ✅ Node Structure
Each node holds:
- `data`: the value
- `left`: reference to the left child
- `right`: reference to the right child

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
```
---

## ✅ Tree Class

The `Tree` class:
- Accepts an array
- Builds a balanced BST
- Provides methods to insert, delete, traverse, check balance, etc.

---

## ⚙️ Core Methods

### 🔨 buildTree(array)
- Removes duplicates
- Sorts the array
- Recursively selects the middle element as the root
- Balances the tree by design

```js
[1, 2, 3, 4, 5, 6, 7]
         ⬇️
        (4)
      /     \
    (2)     (6)
   /  \     /  \
 (1) (3) (5)  (7)
 ```
 ---

## ➕ insert(value)
Adds a value while preserving BST rules.

---

## ➖ deleteItem(value)
Deletes a node while handling:
- No children
- One child
- Two children (replace with in-order successor)

---

## 🔍 find(value)
Searches for a value in **O(log n)** time (if balanced).

---

## 🔄 Tree Traversals
Each function accepts a callback (e.g., `node => console.log(node.data)`):

### 🌐 levelOrderForEach(callback)
- Breadth-first traversal
- Uses a queue

### 🧭 inOrderForEach(callback)
- Left → Root → Right
- Yields sorted values in BST

### 🧭 preOrderForEach(callback)
- Root → Left → Right

### 🧭 postOrderForEach(callback)
- Left → Right → Root

---

## 📏 Tree Measurements

### 📐 height(value)
- Number of edges in longest path from node to a leaf.

### 📏 depth(value)
- Number of edges from root to the node.

---

## ✅ Balancing

### 🔄 isBalanced()
A tree is balanced if:
- Heights of left and right subtrees of every node differ by ≤ 1
- Both subtrees are balanced

### 🧘 rebalance()
- Traverses in-order to collect all values
- Rebuilds tree using `buildTree`

---

## 🧪 Driver Script
```js
// Create a tree
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

tree.insert(101);
tree.insert(150);
tree.insert(203);

console.log(tree.isBalanced()); // false

tree.rebalance();

console.log(tree.isBalanced()); // true
```
---

## 🖼️ prettyPrint()
A function to visualize the tree:

```js
const prettyPrint = (node, prefix = '', isLeft = true) => { ... }
prettyPrint(tree.root);
```
Example output:
```bash
        ┌── 67
    ┌── 23
    │   └── 9
└── 7
    └── 4
```
---

## 🧠 Key Takeaways

- BST enables fast **search, insert, delete** — O(log n) if balanced.
- **Balance is crucial** for performance.
- Traversals reveal structural and logical properties of the tree.
- Practice **recursion deeply** — it’s everywhere in trees.

---

## ✅ Tasks Completed (TOP Milestones)

- [x] Node class  
- [x] Tree class with `buildTree`  
- [x] Insertion & deletion logic  
- [x] Find method  
- [x] All four traversals with callback support  
- [x] `height()` and `depth()`  
- [x] `isBalanced()` and `rebalance()`  
- [x] Driver script and visualization  

---

