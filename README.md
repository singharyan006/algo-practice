# 🧠  Algorithm Practice: Merge Sort, Fibonacci & Linked List

This project contains simple yet fundamental algorithm implementations done as part of [The Odin Project](https://www.theodinproject.com/) curriculum. The focus is on recursive thinking and solving problems like the Fibonacci sequence, Merge Sort and Linked Lists from scratch using JavaScript.

---

## 📂 Files
```
algo-practice
  ├── fibonacci/
  │    ├── iterative.js
  │    └── recursive.js
  ├── merge-sort/
  │    └── mergeSort.js
  ├── linked-list/
  │    ├── Node.js
  │    ├── LinkedList.js
  │    ├── test.js
  │    └── README.md
  └── README.md

```

### `🌀 fibonacci/`
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
---

## 🚀 Sample Inputs & Outputs

### Fibonacci:
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
- The difference between iterative and recursive thinking.
- How to break problems down using base cases and divide & conquer logic.
- The concept of mergeSort and how beautifully are these algorithms are directly associated with our real lives.
- How recursion builds up the solution from the ground.
- The importance of clean code, small reusable functions, and test-driven thinking.
- The fundamentals of linked lists — how they work under the hood and how to implement one from scratch without built-in data structures.



---

## 📄 License
This project is for educational purposes under the [MIT License](LICENSE).


---
