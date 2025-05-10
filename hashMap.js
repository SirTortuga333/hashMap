import { LinkedList } from "./linkedList.js";

export class HashMap {
  loadFactor;
  capacity;
  buckets;

  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;

    this.buckets = new Array(16);
    this.buckets.fill(null);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    // takes key value pair and inserts them in the hash map, if key already exists, updates value

    // Buckets exceed load capacity
    if (this.length() + 1 > this.capacity * this.loadFactor) {
      this.capacity *= 2;
      let currentEntries = this.entries();
      this.buckets = new Array(this.capacity).fill(null);

      currentEntries.forEach((element) => {
        this.set(element[0], element[1]);
      });
    }

    let bucket = this.hash(key);
    let list = this.buckets[bucket];

    if (list !== null) {
      let node = list.head();
      while (node !== null && node.value.key !== key) node = node.nextNode;
      if (node !== null && node.value.key === key) node.value.value = value;
      else {
        list.append({ key, value });
      }
      return;
    }

    this.buckets[bucket] = new LinkedList();
    this.buckets[bucket].append({ key, value });

    return;
  }

  get(key) {
    // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
    let bucket = this.hash(key);
    let list = this.buckets[bucket];

    if (list !== null) {
      let node = list.head();
      while (node !== null && node.value.key !== key) node = node.nextNode;
      if (node !== null && node.value.key === key) return node.value.value;
      else return null;
    }
    return null;
  }

  has(key) {
    // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
    let bucket = this.hash(key);
    let list = this.buckets[bucket];

    if (list !== null) {
      let node = list.head();
      while (node !== null && node.value.key !== key) node = node.nextNode;
      if (node !== null && node.value.key === key) return true;
      else return false;
    }
    return false;
  }

  remove(key) {
    // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true.
    // If the key isn’t in the hash map, it should return false.
    if (this.has(key)) {
      let bucket = this.hash(key);
      let list = this.buckets[bucket];
      list.removeAt(list.find(key));
      return true;
    }
    return false;
  }

  length() {
    // returns the number of stored keys in the hash map.
    let count = 0;
    this.buckets.forEach((element) => {
      if (element !== null) count += element.size();
    });
    return count;
  }

  clear() {
    // removes all entries in the hash map.
    for (let index = 0; index < this.buckets.length; index++) {
      this.buckets[index] = null;
    }
  }

  keys() {
    // returns an array containing all the keys inside the hash map.
    let keys = [];
    this.buckets.forEach((list) => {
      if (list !== null) {
        let node = list.head();
        while (node !== null) {
          keys.push(node.value.key);
          node = node.nextNode;
        }
      }
    });
    return keys;
  }

  values() {
    // returns an array containing all the values.
    let values = [];
    this.buckets.forEach((list) => {
      if (list !== null) {
        let node = list.head();
        while (node !== null) {
          values.push(node.value.value);
          node = node.nextNode;
        }
      }
    });
    return values;
  }

  entries() {
    // returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
    let entries = [];

    this.buckets.forEach((list) => {
      if (list !== null) {
        let node = list.head();
        while (node !== null) {
          entries.push([node.value.key, node.value.value]);
          node = node.nextNode;
        }
      }
    });

    return entries;
  }
}
