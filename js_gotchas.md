# JavaScript Gotchas & Core Concepts

A comprehensive collection of common JavaScript gotchas, pitfalls, and best practices.

---

## Block 1 — Values, References, Arrays

### 1. `const` does not mean immutable

`const` prevents variable reassignment, but properties of objects and elements of arrays can still be mutated.

**Example:**
```js
const user = {
  name: "John"
};

user.name = "Sam"; // Allowed!

console.log(user.name); // Sam
```

**Remember:**
- `const` prevents changing the variable reference.
- It does **not** freeze the object values.

---

### 2. Primitive values copy by value

Primitive types in JS:
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`

**Example:**
```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
```
`a` and `b` hold completely separate primitive values in memory.

---

### 3. Objects and arrays copy by reference

**Example:**
```js
const user1 = {
  name: "John"
};

const user2 = user1;

user2.name = "Sam";

console.log(user1.name); // Sam
```
Both variables reference the exact same object in memory.

---

### 4. Array Methods Gotchas & Usage

#### `map()`
Creates a new array by transforming every element.
```js
const names = users.map(user => user.name);
```

#### `filter()`
Returns a new array containing only matching items.
```js
const activeUsers = users.filter(user => user.active);
```

#### `find()`
Returns the first item matching the condition (or `undefined`).
```js
const user = users.find(user => user.id === 1);
```

#### `some()`
Checks if at least one item satisfies the condition (returns boolean).
```js
const hasAdmin = users.some(user => user.role === "admin");
```

#### `every()`
Checks if all items satisfy the condition (returns boolean).
```js
const allActive = users.every(user => user.active);
```

#### `reduce()`
Used for calculations, aggregation, and grouping.
```js
const total = users.reduce((sum, user) => sum + user.age, 0);
```

#### `sort()` Gotchas
1. **In-place mutation:** `sort()` mutates the original array.
   - **Wrong:**
     ```js
     users.sort();
     ```
   - **Correct:**
     ```js
     const sortedUsers = [...users].sort();
     ```
2. **String conversion default:** JavaScript sorts values lexicographically as strings by default.
   - **Wrong:**
     ```js
     [1, 10, 2].sort(); // Output: [1, 10, 2]
     ```
   - **Correct:**
     ```js
     [1, 10, 2].sort((a, b) => a - b); // Output: [1, 2, 10]
     ```

---

### 5. Spread Operator & Deep Copying

#### Spread Operator (`...`)
Spread creates a **shallow copy**.
```js
const copy = { ...user };
```
Nested objects inside `copy` are still shared by reference.

#### Deep Copying
- **Avoid:**
  ```js
  JSON.parse(JSON.stringify(data));
  ```
  *Problems:* Removes `undefined`, removes functions, and converts `Date` objects to strings.
- **Recommended:**
  ```js
  structuredClone(data);
  ```

---

### 6. Logical & Nullish Operators

#### Optional Chaining (`?.`)
Safely accesses deeply nested properties when an intermediate property may be `null` or `undefined`.
```js
user.address?.city;
```
Prevents runtime `TypeError: Cannot read properties of undefined`.

#### Nullish Coalescing (`??`)
Checks **only** for `null` or `undefined`.
```js
0 ?? 10; // Output: 0
```

#### OR Operator (`||`)
Checks for **all falsy values** (`false`, `0`, `""`, `NaN`, `null`, `undefined`).
```js
0 || 10; // Output: 10
```

---

## Block 2 — Functions, Closures, Async

### 1. Arrow Functions
Arrow functions do not have their own `this` binding; they capture `this` lexically from the surrounding scope.
```js
const add = (a, b) => a + b;
```

---

### 2. Closures & Stale Closures

#### Closure Definition
A closure is a function that retains access to variables from its lexical outer scope even after the outer function has finished executing.
```js
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

#### Stale Closure
A stale closure occurs when a function holds onto an outdated reference or snapshot of a variable.
```js
function counter() {
  let count = 0;
  const message = count; // captured at initialization

  return {
    increase() {
      count++;
    },
    show() {
      console.log(message); // Always logs 0!
    }
  };
}
```
Even when `count` increases, `message` stores the initial value `0`.

---

### 3. Asynchronous JavaScript & Fetching

#### Fetch Error Handling
`fetch()` does **not** reject or throw an error on HTTP error statuses (like 404 or 500). A 404 response still fulfills the promise successfully.

- **Wrong:**
  ```js
  const response = await fetch(url);
  const data = await response.json();
  ```
- **Correct:**
  ```js
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  ```

#### Sequential `await` vs `Promise.all()`
- **Sequential Await (Slow):** Runs HTTP requests sequentially one after another.
  ```js
  await fetchUser(1);
  await fetchUser(2);
  await fetchUser(3);
  ```
- **`Promise.all()` (Fast):** Runs promises concurrently in parallel.
  ```js
  await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
  ]);
  ```

---

### 4. Event Loop Execution Order

Execution order priority in JavaScript:
1. **Synchronous code**
2. **Microtasks** (`Promise.then()`, `await`, `queueMicrotask`)
3. **Macrotasks** (`setTimeout`, `setInterval`, `setImmediate`)

**Example:**
```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

**Output:**
```
A
D
C
B
```

---

## Block 3 — Modules

### Named Export
Best for utility functions and helper modules.
- **Export:**
  ```js
  export function add(a, b) { return a + b; }
  ```
- **Import:**
  ```js
  import { add } from "./math";
  ```

### Default Export
Best for primary single items per file (e.g. main components or modules).
- **Export:**
  ```js
  export default App;
  ```
- **Import:**
  ```js
  import App from "./App";
  ```

---

## Quick Checkpoint Answers

1. **Why does object comparison fail (`{} === {}`)?**
   - Objects are compared by reference location in memory, not by content value. Two distinct object literals have different memory addresses.
2. **Why does `[1, 10, 2].sort()` output `[1, 10, 2]`?**
   - JavaScript converts array elements to strings before sorting. `"10"` comes before `"2"` alphabetically.
3. **Difference between `??` and `||`?**
   - `0 || 5` returns `5` because `0` is falsy.
   - `0 ?? 5` returns `0` because `0` is neither `null` nor `undefined`.
4. **What is a Closure?**
   - A closure is a function bundled together with references to its surrounding lexical environment, keeping access to outer variables even after the outer scope has returned.
