# React with TypeScript Gotchas & Best Practices

A complete guide to React + TypeScript gotchas, state management pitfalls, discriminated unions, generic hooks, and component patterns.

---

## 1. Discriminated Unions for React States ⭐⭐⭐

### Bad Approach (Optional Flags & Multi-State Objects)
```ts
type FetchState = {
  loading: boolean;
  data?: Product[];
  error?: string;
};
```
**Problem:** Allows impossible states (e.g. `{ loading: true, error: "Failed" }` or `{ loading: false, data: undefined, error: undefined }`).

### Better Approach (Discriminated Union)
Use a single discriminator property (e.g. `status`) to make invalid states unrepresentable.
```ts
type FetchState =
  | { status: "loading" }
  | { status: "success"; data: Product[] }
  | { status: "error"; error: string };
```

### Component Implementation
```tsx
function ProductList({ state }: { state: FetchState }) {
  if (state.status === "loading") {
    return <p>Loading...</p>;
  }

  if (state.status === "error") {
    return <p>Error: {state.error}</p>;
  }

  return (
    <div>
      {state.data.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```
TypeScript automatically narrows `state.data` in `"success"` and `state.error` in `"error"`.

---

## 2. React `useState` & Generics

When initial state is `null` or `undefined`, use explicit generic type parameter `useState<T>`:

```tsx
type User = {
  id: number;
  name: string;
};

// Explicit union with null:
const [user, setUser] = useState<User | null>(null);
```

---

## 3. React State Immutability

### Gotcha: Direct Mutation
Mutating state objects or arrays directly will not trigger re-renders because object reference remains unchanged.

```tsx
// ❌ WRONG (Mutates existing reference)
users.push(newUser);
setUsers(users);
```

### Correct: Functional & Immutable Updates
Always return a new object/array copy.

```tsx
// ✅ CORRECT (Creates new array reference)
setUsers(prev => [...prev, newUser]);
```

---

## 4. Comprehensive React + TS Gotchas & Best Practices Table

| Topic | Gotcha | Correct Way |
| :--- | :--- | :--- |
| **Components** | Component names starting with lowercase | Always start component names with an uppercase letter (`UserCard`) |
| **JSX** | Using `class` attribute | Use `className` instead of `class` in JSX |
| **JSX** | Returning multiple sibling elements without a root | Wrap with Fragment `<>...</>` or a container element |
| **Props** | Modifying component props | Props are read-only; never mutate props directly |
| **State** | Mutating state (`push`, `splice`, direct object property assignment) | Create a new array/object using spread `...`, `map`, or `filter` |
| **State** | Expecting state updates to reflect synchronously on the next line | State updates are asynchronous; do not rely on state variable immediately after calling `setState` |
| **State** | Calling `setCount(count + 1)` multiple times in a handler | Use functional updater form `setCount(prev => prev + 1)` |
| **State** | Storing derived state in `useState` | Calculate derived values dynamically during render instead of creating duplicate state |
| **Lists** | Using array index as `key` prop | Use a stable unique ID (`user.id`) as the key |
| **Lists** | Missing `key` prop in mapped lists | Provide a unique `key` prop for every item rendered in a loop |
| **Conditional Rendering** | `{count && <Badge />}` renders `0` when count is `0` | Use explicit boolean condition `{count > 0 && <Badge />}` or ternary operator |
| **Forms** | Uncontrolled inputs by accident (mixing `value` without `onChange`) | Use controlled inputs with explicit `value` and `onChange` handlers |
| **Forms** | Forgetting `e.preventDefault()` in form `onSubmit` | Call `e.preventDefault()` to prevent full browser page reload |
| **Forms** | Forgetting to reset form state after submit | Explicitly reset form state after successful submission |
| **Search / Filter** | Storing filtered arrays in separate state | Keep only the raw data and search query in state; derive filtered results during render |
| **State Design** | Keeping state too high or deeply nested unnecessarily | Keep state local to where it's needed, or lift to the nearest common parent |
| **State Design** | Duplicating state across components | Keep a single source of truth |
| **`useEffect`** | Missing variables in dependency array | Include all reactive values (props, state, functions) used inside `useEffect` |
| **`useEffect`** | Empty dependency array `[]` when reading changing values | Causes stale closures inside the effect |
| **`useEffect`** | Using `useEffect` to synchronize or compute derived data | Compute derived values during render instead of triggering additional effect renders |
| **`useEffect`** | Forgetting cleanup functions on subscriptions/timers | Return a cleanup function (`return () => clearInterval(...)`) |
| **`useEffect`** | Infinite re-render loops | Avoid creating non-memoized objects/functions inside render and placing them in dependencies |
| **Fetch** | Assuming `fetch()` throws on HTTP `404` or `500` | Manually check `response.ok` before parsing JSON |
| **Fetch** | Ignoring loading and error states | Always handle and display loading, error, and empty data states |
| **`useRef`** | Using `useRef` for UI-driven state | Use `useState` for anything that needs to trigger a UI re-render |
| **`useRef`** | Expecting updates to `ref.current` to trigger re-renders | Updating a ref is a side-effect that does not cause component re-renders |
| **`useMemo`** | Wrapping lightweight calculations in `useMemo` | Reserve `useMemo` strictly for genuinely expensive computations |
| **`useCallback`** | Wrapping every callback function needlessly | Use `useCallback` only when passing callbacks to optimized memoized children or dependencies |
| **`useContext`** | Using Context as a global state store for high-frequency updates | Use Context for low-frequency global data (theme, auth); use dedicated state libraries for high-frequency state |
| **Hooks Rules** | Calling hooks inside loops | Hooks must always be called at the top level of component execution |
| **Hooks Rules** | Calling hooks conditionally (`if` statements) | Never wrap hook calls in conditional blocks |
| **Hooks Rules** | Calling hooks inside regular JS functions | Call hooks only inside React functional components or custom hooks |
| **Custom Hooks** | Naming custom hooks without `use` prefix | Custom hook names must start with `use` (e.g., `useFetch`, `useAuth`) |
| **TypeScript** | Using `any` in component props or handlers | Use explicit types, event types (`React.ChangeEvent<HTMLInputElement>`), or `unknown` |
| **Code Quality** | Leaving temporary `console.log()` calls in commits | Remove debug log statements before committing code |
| **Strict Mode** | Disabling `React.StrictMode` because effects run twice in dev | Keep Strict Mode enabled; ensure effects have proper cleanup functions |
