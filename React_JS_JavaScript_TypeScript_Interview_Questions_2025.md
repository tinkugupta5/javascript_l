
# React JS, JavaScript & TypeScript Interview Questions – 2025

This repository contains a comprehensive list of interview questions and their answers for roles involving **React JS**, **JavaScript**, and **TypeScript**. Curated in April 2025, this guide is perfect for frontend developers preparing for interviews.

---

## 📘 JavaScript Interview Questions with Answers

### 1. What is scoping in JavaScript and what are the new keywords introduced in ES6?
**Answer**: Scope defines the accessibility of variables. JavaScript has global, function, and block scopes. ES6 introduced `let` and `const` for block scoping, replacing `var` which is function-scoped.

---

### 2. What is the difference between `var`, `let`, and `const`?
**Answer**:
- `var`: Function-scoped, can be re-declared and updated.
- `let`: Block-scoped, can't be re-declared but can be updated.
- `const`: Block-scoped, can't be re-declared or updated.

---

### 3. What is hoisting in JavaScript and how does it affect variables and functions?
**Answer**: Hoisting is JavaScript’s default behavior of moving declarations to the top. Functions and `var` declarations are hoisted. `let` and `const` are hoisted but stay in the temporal dead zone until initialized.

---

### 4. What is a closure in JavaScript?
**Answer**: A closure is a function that has access to its outer function’s variables even after the outer function has returned.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

### 5. What are Promises in JavaScript and how do they help with async programming?
**Answer**: A Promise represents a value that may be available now, later, or never. It helps in writing cleaner asynchronous code.

```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
};
fetchData().then(console.log);
```

---

### 6. How do async/await work in JavaScript? Provide an example.
**Answer**: `async` functions return a Promise. `await` pauses the function execution until the Promise resolves.

```js
async function getData() {
  const result = await fetchData();
  console.log(result);
}
```

---

### 7. What is an event loop in JavaScript?
**Answer**: The event loop is a mechanism that handles execution of multiple chunks of code (e.g., callbacks, promises) using the call stack, message queue, and microtask queue.

---

### 8. What are callbacks and how are they used?
**Answer**: A callback is a function passed as an argument to another function, called after an operation completes.

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
greet("Hrithik", () => console.log("Welcome!"));
```

---

### 9. How do map, filter, and reduce work in JavaScript?
**Answer**:
- `map`: Transforms each element.
- `filter`: Filters elements based on a condition.
- `reduce`: Reduces to a single value.

```js
const nums = [1, 2, 3];
nums.map(x => x * 2);      // [2, 4, 6]
nums.filter(x => x > 1);   // [2, 3]
nums.reduce((a, b) => a + b, 0); // 6
```

---

### 10. What is an IIFE and why is it used?
**Answer**: IIFE (Immediately Invoked Function Expression) runs immediately after it's defined, useful for creating private scopes.

```js
(function() {
  let privateVar = "I'm hidden!";
  console.log(privateVar);
})();
```

---

(*More answers will be added in future versions.*)
