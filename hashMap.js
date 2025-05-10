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
}
