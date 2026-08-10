# Gotchas & Best Practices Overview

## Learning Plan: Day 1 / Day 2

### Day 1 — JavaScript Fundamentals & Core Gotchas
- Review `js_gotchas.md` with a focus on:
  - `const` vs immutability and reference vs value behavior
  - Array methods: `map`, `filter`, `find`, `reduce`, `sort`
  - Spread operator and deep copy pitfalls (`structuredClone` vs `JSON.parse`)
  - Optional chaining `?.`, nullish coalescing `??`, and `||`
  - Closures, stale closures, and arrow function behavior
  - `fetch()` error handling and `Promise.all()` vs sequential `await`
  - Event Loop order: microtasks vs macrotasks
  - ES Module exports: named vs default

### Day 2 — TypeScript & React with TypeScript
- Review `ts_gotchas.md` and `react_ts_gotchas.md` with a focus on:
  - Type annotations, inference, and when to annotate explicitly
  - `type` vs `interface`, including declaration merging
  - Union types, literal types, and type narrowing
  - Generics and utility types like `Partial`, `Pick`, `Omit`, `Record`
  - React state immutability, functional updates, and hooks rules
  - Discriminated unions for loading/error/success states
  - `useEffect` dependencies, cleanup, and avoiding stale closures
  - `useRef`, `useMemo`, `useCallback`, and controlled component patterns

### Day 3 — HashAgile Project Practice
- Explore the `HashAgile/frontend` project with a focus on:
  - Reading the component structure and understanding the Vite app setup
  - Reviewing `Navbar.tsx`, `Hero.tsx`, `ServicesSection.tsx`, and other section components
  - Checking React + TypeScript patterns in components and props
  - Inspecting `vite.config.ts`, `tsconfig.app.json`, and ESLint setup in `frontend`
  - Reviewing and improving the update manager or state update logic in the HashAgile frontend
  - Making a small enhancement or fix to the HashAgile UI to practice real code changes
  - Testing any changes by running the app in the `HashAgile/frontend` directory

### Day 4 — React Native & Expo Setup, Architecture & Gotchas
- Review `react_native_gotchas.md` with a focus on:
  - React Web vs React Native mental shifts (`View`, `Text`, `Pressable`, no HTML/CSS DOM)
  - Styling differences & Flexbox `flexDirection: 'column'` default
  - Expo architecture, Metro bundler, and Expo Go execution flow
  - Troubleshooting Expo Go connectivity, Metro clearing (`npx expo start --clear`), network limits, and `--tunnel` mode

### Day 5 — Advanced React Native, Navigation, Native APIs & Redux Gotchas
- Review `react_native_gotchas.md` with a focus on:
  - React vs React Native & Architecture (Bridge vs New Architecture - JSI, Fabric, TurboModules)
  - Core & Layout Components (`View`, `Text`, `Image`, `StyleSheet`, `SafeAreaView`, `ScrollView`, `KeyboardAvoidingView`)
  - User Interaction (`Pressable`, `Button`, `TextInput`, `Switch`, `ActivityIndicator`, `Alert`)
  - Expo Router Navigation (`app/_layout.tsx`, Stack, Tabs, params string coercion)
  - Virtualized Lists (`FlatList` & `SectionList` performance, `keyExtractor`, inline renders)
  - Storage & Native APIs (`AsyncStorage` vs `SecureStore`, Camera & Image Picker, Location APIs)
  - Deep Linking & Expo Push Notifications workflow
  - Redux Fundamentals (Store, Slice, Reducers, Immer, `useSelector` reference equality)

The gotchas are divided into dedicated, topic-specific guide files:

1. 🟡 **[JavaScript Gotchas](file:///Users/arun-arivalagan/Desktop/Learn_Phase/js_gotchas.md)** (`js_gotchas.md`)
   - Values, References & Immutability (`const` vs object mutation)
   - Array methods (`map`, `filter`, `find`, `reduce`, `sort` gotchas)
   - Spread operator & `structuredClone` vs `JSON.parse`
   - Optional chaining `?.`, nullish coalescing `??`, and `||`
   - Closures, stale closures, arrow functions
   - `fetch()` HTTP error handling & sequential await vs `Promise.all()`
   - Event Loop execution order (Microtasks vs Macrotasks)
   - ES Modules (Named vs Default exports)

2. 💙 **[TypeScript Gotchas](file:///Users/arun-arivalagan/Desktop/Learn_Phase/ts_gotchas.md)** (`ts_gotchas.md`)
   - Basic type annotations & type inference rules
   - `type` vs `interface` (declaration merging & conventions)
   - Union types & literal types
   - Type narrowing (`typeof`, `in`, truthiness, early returns)
   - Generics (`Array<T>`, generic functions)
   - Built-in Utility types (`Partial`, `Pick`, `Omit`, `Record`, `ReturnType`)
   - Type safety rules (`any` vs `unknown` vs `never`)

3. ⚛️ **[React with TypeScript Gotchas](file:///Users/arun-arivalagan/Desktop/Learn_Phase/react_ts_gotchas.md)** (`react_ts_gotchas.md`)
   - Discriminated unions for state management (loading, success, error states)
   - React state immutability & functional state updates
   - Typing state with generics (`useState<T>`)
   - Comprehensive React + TS Gotchas & Best Practices reference table (JSX, Props, State, Lists, Conditional Rendering, Forms, `useEffect`, `useRef`, `useMemo`, `useCallback`, `useContext`, Rules of Hooks, Custom Hooks, Strict Mode)

4. 📱 **[React Native & Expo Master Gotchas Guide](file:///Users/arun-arivalagan/Desktop/Learn_Phase/react_native_gotchas.md)** (`react_native_gotchas.md`)
   - Mental model shifts (no DOM/HTML, `View`, `Text`, `Pressable`, `flexDirection: column`)
   - Expo architecture, Metro bundler JS compilation flow
   - RN Architecture (JSI, Fabric, TurboModules vs Bridge)
   - Core & layout components (`Text` crashes, `Image` URI dimensions, `ScrollView` memory, `KeyboardAvoidingView`)
   - Expo Router navigation (file-based routes & parameter string coercion)
   - Virtualized lists (`FlatList` rendering & `keyExtractor` traps)
   - Storage security (`AsyncStorage` unencrypted vs `SecureStore` 2KB limit)
   - Native APIs (Camera permissions, Location battery drain, Deep linking, Push Notifications physical device requirement)
   - Redux state immutability & `useSelector` reference equality re-renders
   - Expo Go troubleshooting steps (clear Metro cache, reset app storage, Wi-Fi limits, `--tunnel` mode)


