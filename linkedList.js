import { Node } from "./node.js";
export class LinkedList {
  headNode = null;

  append(value) {
    // Adds to end of list
    if (this.head() === null) {
      const node = new Node();
      node.value = value;
      this.headNode = node;
      return "Node Added";
    }

    let tmp = this.head();
    while (tmp.nextNode !== null) tmp = tmp.nextNode;
    const node = new Node();
    node.value = value;
    tmp.nextNode = node;
    return "Node Added";
  }
  prepend(value) {
    // Adds to begining of list
    if (this.head() === null) this.append(value);
    else {
      const node = new Node();
      node.value = value;
      node.nextNode = this.head();
      this.headNode = node;
    }
    return "Node Added";
  }
  size() {
    // returns size of list (counts nodes)
    if (this.head() === null) return 0;
    let count = 0;
    let tmp = this.head();
    while (tmp !== null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }
  head() {
    // returns first node
    return this.headNode;
  }
  tail() {
    // returns last node
    if (this.head() === null) return null;

    let tmp = this.head();
    while (tmp.nextNode !== null) tmp = tmp.nextNode;
    return tmp;
  }
  at(index) {
    // returns node at index
    if (this.head() === null) return null;
    let count = 0;
    let tmp = this.head();
    while (count !== index && tmp !== null) {
      count++;
      tmp = tmp.nextNode;
    }
    if (count === index) return tmp;
    if (tmp === null) return null;
  }
  pop() {
    // removes last node
    if (this.head() === null) return "Empty Linked List";
    if(this.head().nextNode === null) {
      this.headNode = null;
      return "Node Removed";
    }

    let tmp = this.head();
    while (tmp.nextNode.nextNode !== null) tmp = tmp.nextNode;
    tmp.nextNode = null;

    return "Node Removed";
  }
  contains(value) {
    // returns true if founds value on list
    if (this.head() === null) return false;

    let tmp = this.head();
    while (tmp !== null && tmp.value !== value) tmp = tmp.nextNode;
    if (tmp !== null && tmp.value === value) return true;
    else return false;
  }
  find(value) {
    // returns index if founds value on list
    if (this.head() === null) return "Not Found - Empty Linked List";

    let tmp = this.head();
    let count = 0;
    while (tmp !== null && tmp.value.key !== value) {
      count++;
      tmp = tmp.nextNode;
    }
    if (tmp !== null && tmp.value.key === value) return count;
    else return "Not Found - Not in Linked List";
  }
  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null

    if (this.head() === null) return "Empty Linked List.";

    let string = "";
    let tmp = this.head();
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    if (tmp === null) string += "null";
    return string;
  }
  insertAt(value, index) {
    // inserts a node with "value" at "index"
    if (this.head() === null) return "Empty Linked List";
    if(index === 0){
      this.prepend(value);
      return "Node Added";
    }

    let prev = null;
    let tmp = this.head();
    let count = 0;
    while (tmp !== null && count !== index) {
      count++;
      prev = tmp;
      tmp = tmp.nextNode;
    }
    if(tmp === null && count !== index) return "Error Linked List to short for index";
    if(count === index) {
      const node = new Node();
      node.value = value;
      node.nextNode = tmp;
      prev.nextNode = node;
    }
    return "Node Added"
  }
  removeAt(index) {
    // removes node at "index"
    // inserts a node with "value" at "index"
    if (this.head() === null) return "Empty Linked List";
    if(index === 0){
      this.headNode = this.head().nextNode;
      return "Node Removed"
    }

    let prev = null;
    let tmp = this.head();
    let count = 0;
    while (tmp !== null && count !== index) {
      count++;
      prev = tmp;
      tmp = tmp.nextNode;
    }
    if(tmp === null && count !== index) return "Error Linked List to short for index";
    if(count === index) {
      prev.nextNode = tmp.nextNode;
    }
    return "Node Added"
  }
}
