# 🧠 Algorithm Practice: Recursion, Sorting, Linked List, HashMap & BST

This project contains fundamental algorithm and data structure implementations, done as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

It focuses on **recursive thinking**, **sorting**, **linked lists**, **hash maps**, and now includes a fully-featured **binary search tree** with balance and traversal operations.

---

## 📂 Files

```
algo-practice/
├── recursion/
│ ├── iterative.js
│ └── recursive.js
├── merge-sort/
│ └── mergeSort.js
├── linked-list/
│ ├── Node.js
│ ├── LinkedList.js
│ ├── test.js
│ └── README.md
├── hashmap/
│ ├── hashMap.js
│ ├── test.js
│ └── README.md
├── binary-search-tree/
│ ├── Node.js
│ ├── Tree.js
│ ├── driver.js
│ ├── prettyPrint.js
│ └── README.md
└── README.md
```

### `🌀 recursion/`
- `fibs(limit)` → Iterative Fibonacci generator
- `fibsRec(limit)` → Recursive Fibonacci generator

### `🧮 merge-sort/`
- `mergeSort(arr)` → Recursive merge sort implementation
- Includes a custom `merge()` function to combine sorted halves

### `🧩 linked-list/`
- Node.js → Defines the Node structure
- LinkedList.js → Contains core linked list methods like:
  - `append()`, `prepend()`, `size()`, `at()`, `pop()`, `find()`, `contains()`, `toString()`
- test.js → Sample test cases to validate the implementation

### 🔐 `hashmap/`
- Custom `HashMap` class with:
  - Chained collision handling
  - Resizing logic when load factor exceeds 0.75
  - Methods like `set`, `get`, `has`, `remove`, `clear`, `keys`, `values`, `entries`
- Notes + test cases included  
➡️ [View detailed HashMap README →](./hashmap/README.md)

### 🌳 `binary-search-tree/`
- `Node.js` and `Tree.js` → Fully-featured **Balanced BST** implementation
- `buildTree()` builds a balanced tree from sorted unique array
- Supports:
  - `insert()`, `deleteItem()`, `find()`
  - `height()`, `depth()`, `isBalanced()`, `rebalance()`
  - Traversals: `inOrder`, `preOrder`, `postOrder`, `levelOrder` with callbacks
- Includes a `prettyPrint()` visualizer and `driver.js` demo
➡️ [View detailed BST README →](./binary-search-tree/README.md)

---

## 🚀 Sample Inputs & Outputs

### Recursion:
```js
fibs(8); 
// ➜ [0, 1, 1, 2, 3, 5, 8, 13]

fibsRec(10); 
// ➜ [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Merge Sort:
```js
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
// ➜ [0, 1, 1, 2, 3, 5, 8, 13]

mergeSort([105, 79, 100, 110]);
// ➜ [79, 100, 105, 110]
```

---

## 🧩 What I Learned

- The difference between iterative vs recursive solutions.
- How to build data structures from scratch — LinkedList, HashMap, BST.
- Handling collisions and resizing logic in hash-based storage.
- Balancing and traversing binary search trees efficiently.
- The importance of clear, testable, modular code.
- How lower-level data structures power high-level abstractions.

---

## 📄 License
This project is for educational purposes under the [MIT License](LICENSE).

---
