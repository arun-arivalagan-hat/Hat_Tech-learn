# TypeScript Gotchas & Core Concepts

A comprehensive guide to TypeScript concepts, type safety gotchas, type inference, narrowing, generics, and utility types.

---

## 1. Basic Type Annotations & Type Inference

> **Rule:** Do not write types everywhere. Let TypeScript infer types whenever possible.

### Type Annotation
Explicitly specifying the type for a variable.
```ts
let username: string = "Arun";
let age: number = 25;
let isActive: boolean = true;
```

### Type Inference
TypeScript automatically infers types based on assigned initial values.
```ts
let username = "Arun"; // inferred as string
let age = 25;          // inferred as number
```

### When to add explicit annotations?
Add explicit types for:
- Function parameters
- Function return values
- Complex objects
- API responses
- Component props

**Example:**
```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## 2. `type` vs `interface`

Both are used to define object shapes and contracts.

### `type` (Recommended Default)
Most common and versatile choice for objects, unions, primitives, and tuples.
```ts
type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Arun",
  email: "arun@test.com"
};
```

### `interface`
Used when OOP contracts or type extension is required.
```ts
interface User {
  id: number;
  name: string;
}
```

### Declaration Merging in Interfaces
Multiple interface declarations with the same name automatically merge into one.
```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Resulting User type: { name: string; age: number; }
```
*Note:* `type` alias **cannot** perform declaration merging.

### Convention
- Use `type` by default.
- Use `interface` when defining libraries, public APIs, or requiring declaration merging.

---

## 3. Union Types & Literal Types

### Union Type
Allows a value to hold one of several specified types.
```ts
let id: number | string;
id = 10;    // Valid
id = "abc"; // Valid
```

### Literal Type
Restricts a variable to exact specified literal values.
```ts
type Status = "idle" | "loading" | "error";

let status: Status;
status = "loading"; // ✅ Allowed
status = "done";    // ❌ Error: Type '"done"' is not assignable to type 'Status'.
```

---

## 4. Type Narrowing

Type narrowing means refining a broad type into a more specific type within a code path.

### `typeof` Narrowing
Used for primitive types (`string`, `number`, `boolean`, `symbol`, `bigint`, `function`, `undefined`).
```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value + 1);
  }
}
```

### `in` Operator Narrowing
Checks if a property exists on an object.
```ts
type Dog = { bark(): void };
type Cat = { meow(): void };

function sound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

### Truthiness Checks
Narrows out `null` and `undefined`.
```ts
function printName(name?: string) {
  if (name) {
    console.log(name); // name is guaranteed to be string here
  }
}
```

### Early Returns for Narrowing
Keeps functions flat and clean.
```ts
function UserCard(user?: User) {
  if (!user) {
    return null;
  }
  return user.name; // user is guaranteed to be defined
}
```

---

## 5. Generics

Generics allow building reusable components and functions that work across a variety of types while preserving type safety.

> *Mental model:* "I don't know the exact type yet; it will be provided when used."

### `Array<T>` vs `T[]`
```ts
// Both are equivalent:
const names1: string[] = ["Arun", "John"];
const names2: Array<string> = ["Arun", "John"];
```

### Custom Generic Functions
```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello"); // Returns string
identity<number>(100);     // Returns number
```

---

## 6. Utility Types

TypeScript provides built-in global utility types to facilitate common type transformations.

### `Partial<T>`
Makes all properties of `T` optional.
```ts
type Product = {
  id: number;
  name: string;
};

type UpdateProduct = Partial<Product>;
// { id?: number; name?: string; }
```

### `Pick<T, K>`
Constructs a type by picking specified keys `K` from `T`.
```ts
type PublicUser = Pick<User, "id" | "name">;
```

### `Omit<T, K>`
Constructs a type by omitting specified keys `K` from `T`.
```ts
type CreateUser = Omit<User, "id">;
```

### `Record<K, T>`
Constructs an object type whose property keys are `K` and values are `T`.
```ts
type Status = "loading" | "success";

const message: Record<Status, string> = {
  loading: "Loading...",
  success: "Done"
};
```

### `ReturnType<T>`
Extracts the return type of a function type `T`.
```ts
function getUser() {
  return { id: 1, name: "Arun" };
}

type User = ReturnType<typeof getUser>;
```

---

## 7. `any` vs `unknown` vs `never`

### `any` ❌ (Avoid)
Bypasses TypeScript type checking entirely.
```ts
let data: any;
data.nonExistentMethod(); // No compile error! Fails at runtime.
```
> **Rule:** `any` should be avoided in production code reviews.

### `unknown` ✅ (Type-Safe Alternative)
Represents any value, but forces type checking/narrowing before usage.
```ts
let data: unknown;

// ❌ Bad: data.toUpperCase();

// ✅ Good:
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

### `never` 🚫 (Unreachable Code & Exhaustive Checks)
Represents values that can never occur. Commonly used for exhaustive switch checks.
```ts
type Status = "loading" | "success" | "error";

function check(status: Status) {
  switch (status) {
    case "loading":
      return "Loading...";
    case "success":
      return "Done";
    case "error":
      return "Failed";
    default:
      // If a new status is added to Status union without adding a case here,
      // TypeScript will report a compile-time type error.
      const impossible: never = status;
      return impossible;
  }
}
```
