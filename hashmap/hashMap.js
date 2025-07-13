class HashMap {
  constructor() {
    this.capacity = 16;
    this.size = 0;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  hash(key) {
    let hashCode = 0;
    const prime = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  checkIndexBounds(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  set(key, value) {
    const index = this.hash(key);
    this.checkIndexBounds(index);

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    this.checkIndexBounds(index);

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);
    this.checkIndexBounds(index);

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    const keysArray = [];

    for (let bucket of this.buckets) {
      for (let [key, _] of bucket) {
        keysArray.push(key);
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let bucket of this.buckets) {
      for (let [_, value] of bucket) {
        valuesArray.push(value);
      }
    }

    return valuesArray;
  }

  entries() {
    const entriesArray = [];

    for (let bucket of this.buckets) {
      for (let [key, value] of bucket) {
        entriesArray.push([key, value]);
      }
    }

    return entriesArray;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    for (let bucket of oldBuckets) {
      for (let [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}

module.exports = HashMap;
