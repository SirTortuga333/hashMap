import { HashMap } from "./hashMap.js";

const test = new HashMap(); // or HashMap() if using a factory

// console.log(test);
// console.log(test.length()); // 0

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// console.log(test);
// console.log(test.get("apple")); // red
// console.log(test.get("gino")); // null
// console.log(test.has("apple")); // true
// console.log(test.has("gino")); // false
// console.log(test.remove("apple")); // true
// console.log(test.remove("gino")); // false
// console.log(test.length()); // 12
