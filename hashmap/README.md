# 🧠 HashMap (from scratch)

This project is part of The Odin Project's JavaScript curriculum.  
In this, I built a custom `HashMap` class without using JavaScript’s built-in `Map` or object key-value behavior.

---

## 📦 Key Concepts

- A **HashMap** stores key-value pairs.
- Each **key is converted into an index** using a `hash()` function.
- The key-value pair is then stored in a **bucket** (an array at that index).
- **Collisions** are handled using **chaining** (each bucket is an array of pairs).
- **Resizing** happens when the load factor exceeds a threshold (default 0.75).

---

## 🧰 Internal Properties

| Property     | Purpose |
|--------------|---------|
| `capacity`   | Total number of buckets (initial: 16) |
| `size`       | Number of stored key-value pairs |
| `loadFactor` | Max ratio of size/capacity before resizing (default: 0.75) |
| `buckets`    | Array of arrays storing key-value pairs |

---

## ⚙️ Hash Function

```js
hash(key) {
  let hashCode = 0;
  const prime = 31;

  for (let i = 0; i < key.length; i++) {
    hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
  }

  return hashCode;
}
```

---

## ⚙️ Hash Function Details

- ✅ Uses a **prime multiplier** for better distribution.
- ✅ Applies **modulo during the loop** to avoid integer overflow.
- ✅ Assumes **all keys are strings** (as required by the assignment).

---

## ✅ Methods Implemented

### `set(key, value)`
- Adds a new key-value pair.
- If the key already exists, updates the value.
- Triggers a resize if the load factor is exceeded.

### `get(key)`
- Returns the value for a key, or `null` if not found.

### `has(key)`
- Returns `true` if the key exists, else `false`.

### `remove(key)`
- Deletes the key-value pair.
- Returns `true` if deleted, `false` if not found.

### `length()`
- Returns the number of stored key-value pairs.

### `clear()`
- Removes all entries from the map.

### `keys()`
- Returns an array of all keys.

### `values()`
- Returns an array of all values.

### `entries()`
- Returns an array of `[key, value]` pairs.

---

## 🧪 Testing (in `test.js`)

- Inserted 12 values (hit 0.75 load factor)
- Overwrote some keys (length stayed the same)
- Inserted 13th value (`"moon"`) → triggered resize (capacity doubled)
- After resizing, verified that all other methods (`get`, `has`, `remove`, etc.) still worked correctly

---

## 💡 Notes to Self

- Always access **buckets using the hashed index**, never directly with the key.
- For collision handling, always **check if the key exists inside the bucket array**.
- During resizing, rehash and reinsert **every key-value pair**.
- Only increment `size` **when adding a new key**, not when updating an existing one.

---

## 🌱 Possible Improvements

- Support **more data types as keys** (e.g., numbers, symbols).
- Add a `forEach()` method like the native `Map`.
- Implement a **`HashSet`** using similar internal logic.

---

## 📁 File Structure

```
hashmap/
├── hashMap.js # Main class
├── test.js # Manual testing file
└── README.md # You're here!
```

---