## Block 1 — Values, References, Arrays

---

## 1. `const` does not mean immutable

`const` prevents reassignment, but objects and arrays can still be changed.

Example:

```js
const user = {
  name: "John"
};

user.name = "Sam";

console.log(user.name); // Sam
Remember:
const stops changing the variable reference.
It does not freeze the object.
2. Primitive values copy by value
Primitive types:
string
number
boolean
null
undefined
bigint
symbol
Example:
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
a and b have separate values.
3. Objects and arrays copy by reference
Example:
const user1 = {
  name: "John"
};

const user2 = user1;

user2.name = "Sam";

console.log(user1.name);
Output:
Sam
Both variables point to the same object.
4. React state should not be mutated
Wrong:
users.push(newUser);

setUsers(users);
React may not detect the change because the reference is unchanged.
Correct:

setUsers(prev => [
  ...prev,
  newUser
]);
Always create a new array or object.
Array Methods
map()
Creates a new array by transforming values.
const names = users.map(
  user => user.name
);
filter()
Returns only matching items.
const activeUsers = users.filter(
  user => user.active
);
find()
Returns the first matching item.
const user = users.find(
  user => user.id === 1
);
some()
Checks if at least one item matches.
const hasAdmin = users.some(
  user => user.role === "admin"
);
every()
Checks if all items match.
const allActive = users.every(
  user => user.active
);
reduce()
Used for calculations and grouping.
const total = users.reduce(
  (sum, user) => {
    return sum + user.age;
  },
  0
);
sort() Gotcha
sort() changes the original array.
Wrong:

users.sort();
Correct:
const sortedUsers = [...users].sort();
Numeric sorting
JavaScript sorts values as strings by default.
[1,10,2].sort();
Output:
[1,10,2]
Correct:
[1,10,2].sort(
  (a,b) => a-b
);
Output:
[1,2,10]
Spread Operator
Spread creates a shallow copy.
Example:

const copy = {
  ...user
};
Nested objects are still shared.
Deep Copy
Avoid:
JSON.parse(
  JSON.stringify(data)
);
Problems:
removes undefined
removes functions
changes Date objects
Use:
structuredClone(data);
Optional Chaining ?.
Used when a property may not exist.
Example:

user.address?.city
Prevents runtime errors.
Nullish Coalescing ??
Checks only:
null
undefined
Example:
0 ?? 10
Result:
0
OR Operator ||
Checks all falsy values:
false
0
""
NaN
null
undefined
Example:
0 || 10
Result:
10
Block 2 — Functions, Closures, Async
Arrow Functions
Arrow functions capture this from the surrounding scope.
Example:

const add = (a,b) => a+b;
Closure
A closure is a function that remembers variables from where it was created.
Example:

function createCounter(){

  let count = 0;

  return function(){

    count++;

    return count;

  };

}
Usage:
const counter = createCounter();

counter();
counter();
Output:
1
2
Stale Closure
A stale closure happens when a function remembers an old value.
Example:

function counter(){

  let count = 0;

  const message = count;

  return {

    increase(){
      count++;
    },

    show(){
      console.log(message);
    }

  };

}
Even after changing count, message keeps the old value.
This is the same idea as React stale state bugs.

Fetch Error Handling
fetch() does not throw an error for HTTP errors.
A 404 still resolves.

Wrong:

const response = await fetch(url);
Correct:
const response = await fetch(url);

if(!response.ok){
  throw new Error(response.status);
}
Sequential Await
Runs one after another.
await fetchUser(1);
await fetchUser(2);
await fetchUser(3);
Promise.all()
Runs promises together.
await Promise.all([
  fetchUser(1),
  fetchUser(2),
  fetchUser(3)
]);
Event Loop
Execution order:
Synchronous code
Microtasks
Promise
await
Macrotasks
setTimeout
Example:
console.log("A");

setTimeout(()=>{
  console.log("B");
},0);

Promise.resolve()
.then(()=>{
  console.log("C");
});

console.log("D");
Output:
A
D
C
B
Block 3 — Modules
Named Export
Used for utilities and functions.
Export:

export function add(){

}
Import:
import { add } from "./math";
Default Export
Mostly used for components/pages.
Export:

export default App;
Import:
import App from "./App";
Checkpoint Answers
Why does object comparison fail?
Objects compare references.
{} === {}
Result:
false
Why does sort behave differently?
Because JavaScript converts values into strings before sorting.
Difference between ?? and ||
0 || 5
returns:
5
because 0 is falsy.
0 ?? 5
returns:
0
because 0 is not null or undefined.
Closure definition
A closure is a function that keeps access to variables from its outer scope even after that outer function has finished.



# TypeScript + React Week 1 Notes 

> Learn TypeScript by adding types to real React code.
>
> Rule: **Do not write types everywhere. Let TypeScript infer when it can.**

---

# 1. Basic Type Annotations & Type Inference 

## Type Annotation

We explicitly tell TypeScript the type.

```ts
let username: string = "Arun";

let age: number = 25;

let isActive: boolean = true;
```

---

## Type Inference 

TypeScript can automatically understand types.

```ts
let username = "Arun";

let age = 25;
```

TypeScript knows:

```ts
username: string

age: number
```

No need:

```ts
let age: number = 25; // unnecessary
```

---

## When to add annotations?

Add types when:

- Function parameters
- Function return values
- Complex objects
- API responses
- React component props

Example:

```ts
function add(
 a:number,
 b:number
){
 return a+b;
}
```

---

# 2. Type vs Interface 

Both create object types.

---

# type

Most common choice.

```ts
type User = {

 id:number;
 name:string;
 email:string;

}
```

Usage:

```ts
const user:User = {

id:1,
name:"Arun",
email:"arun@test.com"
}
```

---

# interface

```ts
interface User {

 id:number;
 name:string;

}
```

---

# Our Convention

Use:

```ts
type
```

by default.

Use:

```ts
interface
```

when you need:

- Declaration merging
- Extending library types

---

## Interface merging example

```ts
interface User {

name:string;

}


interface User {

age:number;

}
```

TypeScript combines them:

```ts
{
name:string;
age:number;
}
```

A `type` cannot do this.

---

# 3. Union Types & Literal Types 🔀

## Union Type

A value can have multiple types.

Example:

```ts
let id:number|string;

id=10;

id="abc";
```

---

## Literal Type

Exact allowed values.

Example:

```ts
type Status =
"idle" |
"loading" |
"error";
```

Only these values are allowed.

```ts
let status:Status;

status="loading"; // ✅

status="done"; // ❌
```

---

## React Example

Button variants:

```ts
type ButtonType =
"primary" |
"secondary";
```

Component:

```tsx
function Button(
{
type
}:{
type:ButtonType
}){

}
```

---

# 4. Discriminated Unions ⭐⭐⭐

## Most Important React TypeScript Pattern

Used for:

- API states
- Forms
- UI states
- Loading states


---

## Bad approach 

```ts
type FetchState = {

loading:boolean;

data?:Product[];

error?:string;

}
```

Problem:

Impossible state:

```ts
{
loading:true,
error:"Failed"
}
```

---

# Better approach 

Use a discriminator property.

```ts
type FetchState =

| {

status:"loading";

}

| {

status:"success";

data:Product[];

}

| {

status:"error";

error:string;

}
```

---

## React Example

```tsx
function ProductList(
{
state
}:{
state:FetchState
}){


if(state.status==="loading"){

return <p>Loading...</p>

}


if(state.status==="error"){

return <p>{state.error}</p>

}


return (

state.data.map(product=>

<div>
{product.name}
</div>

)

)

}
```

TypeScript knows:

- loading → no data
- error → has error
- success → has data

---

# 5. Type Narrowing 🔍

Narrowing means reducing a broad type into a specific type.

---

# typeof narrowing

Example:

```ts
function print(value:string|number){

if(typeof value==="string"){

console.log(value.toUpperCase());

}

else{

console.log(value+1);

}

}
```

---

# in narrowing

Checks if property exists.

```ts
type Dog={
bark():void;
}


type Cat={
meow():void;
}


function sound(animal:Dog|Cat){

if("bark" in animal){

animal.bark();

}

else{

animal.meow();

}

}
```

---

# Truthiness checks

```ts
function printName(
name?:string
){

if(name){

console.log(name);

}

}
```

TypeScript knows:

```ts
name:string
```

inside the block.

---

# Early Returns 

Cleaner React code:

```ts
function UserCard(
user?:User
){

if(!user){

return null;

}

return <h1>{user.name}</h1>

}
```

After return:

```ts
user
```

is guaranteed.

---

# 6. Generics 🧬

Generics allow reusable types.

Think:

> "I don't know the type yet, but the user will provide it."

---

# Array<T>

Instead of:

```ts
string[]
```

You can write:

```ts
Array<string>
```

Example:

```ts
const names:Array<string>=[

"Arun",
"John"

]
```

---

# React useState<T>

Example:

```tsx
const [user,setUser]
=
useState<User|null>(null);
```

Initially:

```ts
null
```

Later:

```ts
User
```

---

# Create Your Own Generic Function

Example:

```ts
function identity<T>(
value:T
):T{

return value;

}
```

Usage:

```ts
identity<string>("hello");

identity<number>(100);
```

TypeScript remembers the type.

---

# 7. Utility Types 🛠️

---

# Partial<T>

Makes all properties optional.

```ts
type Product={

id:number;
name:string;

}


type UpdateProduct =
Partial<Product>;
```

Result:

```ts
{

id?:number;
name?:string;

}
```

---

# Pick<T,K>

Select properties.

```ts
type PublicUser =
Pick<User,"id"|"name">
```

---

# Omit<T,K>

Remove properties.

```ts
type CreateUser =
Omit<User,"id">
```

---

# Record<K,T>

Creates object maps.

```ts
type Status =
"loading"|
"success";


const message:
Record<Status,string>
={

loading:"Loading",

success:"Done"

}
```

---

# ReturnType<T>

Gets function return type.

```ts
function getUser(){

return {

id:1,
name:"Arun"

}

}


type User =
ReturnType<typeof getUser>;
```

---

# 8. any vs unknown vs never 🚦

---

# any ❌

Avoid.

```ts
let data:any;
```

Problem:

TypeScript stops checking.

```ts
data.name();

data();
```

No error.

Runtime crash possible.

Rule:

> any is banned in code review.

---

# unknown ✅

Safe alternative.

```ts
let data:unknown;
```

Need checking before use.

Wrong:

```ts
data.name;
```

Correct:

```ts
if(typeof data==="string"){

data.toUpperCase();

}
```

---

## API Example

Bad:

```ts
function parse(data:any){

}
```

Good:

```ts
function parse(data:unknown){

}
```

Validate first.

---

# never 🚫

Means:

"This can never happen."

Used for exhaustive checks.

Example:

```ts
type Status =
"loading"|
"success"|
"error";


function check(status:Status){

switch(status){

case "loading":
return "Loading";


case "success":
return "Done";


case "error":
return "Failed";


default:

const impossible:never=status;

return impossible;

}

}
```
| Topic                 | Gotcha                                               | Correct Way                                                                                    |
| --------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Components            | Component names start with lowercase                 | Always start component names with an uppercase letter (`UserCard`)                             |
| JSX                   | Using `class`                                        | Use `className` instead of `class`                                                             |
| JSX                   | Returning multiple elements                          | Wrap with `<>...</>` or a parent element                                                       |
| Props                 | Modifying props                                      | Props are read-only; never modify them                                                         |
| State                 | Mutating state (`push`, `splice`, direct assignment) | Create a new array/object using `...`, `map`, or `filter`                                      |
| State                 | Expecting state to update immediately                | State updates are asynchronous; don't rely on the new value immediately after `setState`       |
| State                 | Calling `setCount(count + 1)` twice                  | Use `setCount(prev => prev + 1)`                                                               |
| State                 | Storing derived state                                | Calculate derived values during render instead of storing them                                 |
| Lists                 | Using array index as `key`                           | Use a stable unique ID (`user.id`)                                                             |
| Lists                 | Missing `key`                                        | Every list item needs a unique `key`                                                           |
| Conditional Rendering | `{count && <Badge />}` renders `0`                   | Use `count > 0 &&` or a ternary                                                                |
| Forms                 | Uncontrolled inputs by accident                      | Use controlled inputs with `value` and `onChange`                                              |
| Forms                 | Forgetting `e.preventDefault()`                      | Prevent page refresh on form submission                                                        |
| Forms                 | Forgetting to reset the form                         | Reset form state after successful submission                                                   |
| Search                | Storing filtered users in state                      | Keep only the original data in state; derive filtered data                                     |
| State Design          | Keeping state too high                               | Store state in the nearest common parent                                                       |
| State Design          | Duplicating state                                    | Keep a single source of truth                                                                  |
| `useEffect`           | Missing dependencies                                 | Include all values used inside the effect                                                      |
| `useEffect`           | Empty dependency array with changing values          | Causes stale closures                                                                          |
| `useEffect`           | Using `useEffect` for derived data                   | Compute derived values during render                                                           |
| `useEffect`           | Forgetting cleanup                                   | Return a cleanup function for timers, listeners, subscriptions, etc.                           |
| `useEffect`           | Infinite loop                                        | Avoid unstable objects/functions in the dependency array                                       |
| Fetch                 | Assuming `fetch()` throws on `404`                   | Check `response.ok` manually                                                                   |
| Fetch                 | Ignoring loading state                               | Always handle loading UI                                                                       |
| Fetch                 | Ignoring error state                                 | Always handle error UI                                                                         |
| Fetch                 | Ignoring empty state                                 | Show a message when no data exists                                                             |
| `useRef`              | Using `useRef` for UI state                          | Use `useState` for anything that affects the UI                                                |
| `useRef`              | Expecting `ref.current` changes to re-render         | Updating a ref does not trigger a re-render                                                    |
| `useMemo`             | Wrapping everything in `useMemo`                     | Use it only for expensive computations                                                         |
| `useCallback`         | Wrapping every function                              | Use it only when function identity matters (e.g., memoized children)                           |
| `useContext`          | Using Context as a global state manager              | Use Context for shared data like theme or auth; use dedicated state libraries when appropriate |
| Hooks                 | Calling hooks inside loops                           | Hooks must be called at the top level                                                          |
| Hooks                 | Calling hooks inside `if` statements                 | Never call hooks conditionally                                                                 |
| Hooks                 | Calling hooks inside nested functions                | Call hooks only in React components or custom hooks                                            |
| Custom Hooks          | Naming without `use`                                 | Custom hooks must start with `use`                                                             |
| TypeScript            | Using `any`                                          | Prefer proper types or `unknown` with narrowing                                                |
| Code Quality          | Leaving `console.log()`                              | Remove debug logs before committing                                                            |
| Strict Mode           | Disabling Strict Mode because effects run twice      | Keep Strict Mode and implement proper cleanup                                                  |
