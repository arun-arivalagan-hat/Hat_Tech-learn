# React Native Master Guide: Gotchas & Most Interesting Main Points 📱

A comprehensive reference guide covering core React Native concepts, architecture, Expo ecosystem, layout, user interactions, navigation, lists, storage, native device APIs, deep linking, push notifications, and Redux state management.

---

## Quick Table of Contents

1. ⚡ [React vs React Native](#1-react-vs-react-native)
2. 🏗️ [React Native Architecture](#2-react-native-architecture)
3. 📦 [Expo & Metro Bundler](#3-expo--metro-bundler)
4. 🧱 [Core Components (`View`, `Text`, `Image`, `StyleSheet`)](#4-core-components-view-text-image-stylesheet)
5. 📐 [Flexbox & Layout Components (`SafeAreaView`, `ScrollView`, `KeyboardAvoidingView`)](#5-flexbox--layout-components-safeareaview-scrollview-keyboardavoidingview)
6. 👆 [User Interaction Components (`Pressable`, `Button`, `TextInput`, `Switch`, `ActivityIndicator`, `Alert`)](#6-user-interaction-components-pressable-button-textinput-switch-activityindicator-alert)
7. 🗺️ [Expo Router Navigation](#7-expo-router-navigation)
8. 📜 [`FlatList` & `SectionList`](#8-flatlist--sectionlist)
9. 💾 [AsyncStorage & SecureStore](#9-asyncstorage--securestore)
10. 📸 [Camera & Image Picker](#10-camera--image-picker)
11. 📍 [Location APIs](#11-location-apis)
12. 🔗 [Deep Linking](#12-deep-linking)
13. 🔔 [Expo Push Notifications (Concepts & Workflow)](#13-expo-push-notifications-concepts--workflow)
14. 🔄 [Redux Fundamentals (Store, Slice, Actions, Reducers, `useSelector`, `useDispatch`)](#14-redux-fundamentals-store-slice-actions-reducers-useselector-usedispatch)
15. 🛠️ [Expo Go Troubleshooting & Connection Fixes](#15-expo-go-troubleshooting--connection-fixes-️)
16. 💡 [Summary Matrix for Rapid Interview & Exam Recall](#16-summary-matrix-for-rapid-interview--exam-recall-)

---

## 1. React vs React Native

### 💡 Most Interesting Main Points
- **Declarative Paradigm Shared**: Both use the same React core (`JSX`, `useState`, `useEffect`, components, props, hooks).
- **Target Rendering Engine**: React Web targets the **Browser DOM**, whereas React Native targets **Native UI primitives** (iOS `UIView` & Android `android.view.View`).
- **Logic Reusability**: Up to 80-90% of non-UI logic (Redux, hooks, helper utilities, data fetching) can be shared seamlessly between web and mobile apps.

### ⚠️ Gotchas & Critical Pitfalls
- **No Web HTML Elements**: Standard HTML tags (`<div>`, `<span>`, `<h1>`, `<p>`, `<a>`, `<button>`) do **not** exist in React Native. Using them causes immediate runtime app crashes.
- **No CSS Cascade & Pseudo-Classes**: Mobile styling has no `:hover`, `:active`, `:focus`, `:nth-child`, pseudo-elements, or CSS file cascading.
- **No Browser Globals**: APIs dependent on DOM (`window.document`, `localStorage`, `document.getElementById`) fail in the native JS engine (Hermes).

---

## 2. React Native Architecture

### 💡 Most Interesting Main Points
- **Old Architecture (Bridge)**:
  - Consists of **3 main threads**: JS Thread, Native UI Thread, and Shadow Thread (Flexbox layout calculation).
  - Threads communicate asynchronously over a C++ **Bridge** via serialized JSON strings.
- **New Architecture (JSI, Fabric, TurboModules)**:
  - **JSI (JavaScript Interface)**: Replaces the JSON bridge with direct C++ memory binding. JS can call native methods synchronously with zero JSON serialization overhead!
  - **Fabric**: New C++ native UI rendering engine enabling concurrent rendering and synchronous layout measurements.
  - **TurboModules**: Lazy-loads native modules on demand (improves app cold start time significantly).

```
[Old Bridge Architecture]
JS Thread  <── (Async JSON Serialized Strings over Bridge) ──>  Native Thread

[New Architecture with JSI]
JS Engine  <── (Direct C++ Memory Call via JSI) ──>  Native C++ / Native UI
```

### ⚠️ Gotchas & Critical Pitfalls
- **Bridge Bottleneck (Old Arch)**: Sending high-frequency updates (e.g., scroll events, drag gestures, rapid animations) across the async JSON bridge causes frame drops and UI stuttering.
- **Async Layout Glitches**: In the old architecture, layout measurement is asynchronous, leading to potential "blank frame flash" during fast list scrolling.

---

## 3. Expo & Metro Bundler

### 💡 Most Interesting Main Points
- **Expo Framework**: Higher-level framework built on top of React Native providing unified cross-platform APIs, build tools (`EAS`), and pre-configured native SDK modules.
- **Metro Bundler**: React Native’s specialized JS bundler (analogous to Vite/Webpack on the web) that transforms TypeScript/JSX into a single JS bundle and serves it instantly with Fast Refresh over Wi-Fi.

### ⚠️ Gotchas & Critical Pitfalls
- **Expo Go Limits**: Native libraries containing custom native Objective-C/Swift/Java/Kotlin code (e.g., custom native C++ libraries or low-level SDKs) **cannot run inside Expo Go**. You must create an **Expo Development Build** (`npx expo run:android` / `npx expo run:ios`).
- **Stale Metro Cache**: Sudden mysterious build or module resolution errors are frequently caused by stale Metro cache. Always clear Metro cache when troubleshooting:
  ```bash
  npx expo start --clear
  ```

---

## 4. Core Components (`View`, `Text`, `Image`, `StyleSheet`)

### 💡 Most Interesting Main Points
- **`StyleSheet.create()` Optimization**: Creates immutable style objects and passes numeric IDs over native bridges instead of re-creating fresh JavaScript objects on every render pass.
- **Image Caching**: React Native `<Image>` automatically handles remote network image caching based on standard HTTP caching headers.

### ⚠️ Gotchas & Critical Pitfalls
- **Bare Text App Crash**: All text MUST be wrapped in `<Text>`. Writing `<View>Hello</View>` or `<View>{count && "Text"}</View>` (when `count` is `0`) causes an instant app crash: `"Text strings must be rendered within a <Text> component"`.
- **Network Images Require Explicit Dimensions**: Remote images (`source={{ uri: 'https://...' }}`) will **NOT** render unless explicit `width` and `height` styles are specified!
  ```tsx
  // ❌ Won't display anything!
  <Image source={{ uri: 'https://example.com/pic.png' }} />

  // ✅ Correct
  <Image source={{ uri: 'https://example.com/pic.png' }} style={{ width: 100, height: 100 }} />
  ```
- **No Style Inheritance**: Flex/font styles applied to `<View>` do **not** cascade down to child `<Text>` components (unlike web CSS inheritance). Inheritance only works for nested `<Text>` inside `<Text>`.

---

## 5. Flexbox & Layout Components (`SafeAreaView`, `ScrollView`, `KeyboardAvoidingView`)

### 💡 Most Interesting Main Points
- **Yoga Layout Engine**: Meta’s cross-platform C++ engine converts Flexbox rules directly into native Android (`android.view.View`) and iOS (`UIView`) layout constraints.
- **Default Orientation**: In React Native, `flexDirection` defaults to **`column`** (vertical stacking), whereas web CSS defaults to `row`.

### ⚠️ Gotchas & Critical Pitfalls
- **`ScrollView` Memory Bloat**: `ScrollView` renders **ALL child components in memory at once**. Using `ScrollView` for lists with dozens or hundreds of items will result in high memory usage and severe frame drops. Use `FlatList` instead.
- **`SafeAreaView` Platform Difference**: Core React Native `SafeAreaView` only supports iOS properly. Always use `react-native-safe-area-context` for cross-platform notch, dynamic island, and status bar padding.
- **`KeyboardAvoidingView` Behavior Gotcha**: Requires explicit platform-specific `behavior`:
  ```tsx
  <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    style={{ flex: 1 }}
  >
    {/* Form Inputs */}
  </KeyboardAvoidingView>
  ```

---

## 6. User Interaction Components (`Pressable`, `Button`, `TextInput`, `Switch`, `ActivityIndicator`, `Alert`)

### 💡 Most Interesting Main Points
- **`Pressable` Versatility**: Replaces legacy `TouchableOpacity` / `TouchableHighlight`. Supports state-aware styling (`pressed`), `hitSlop` (extends touchable target area without altering layout), and native Android ripple effects (`android_ripple`).
- **Native OS Mapping**: `Switch`, `ActivityIndicator`, and `Alert` map directly to native OS components (iOS `UISwitch` / Android `Switch`).

### ⚠️ Gotchas & Critical Pitfalls
- **`<Button>` is Unstyleable**: Core `<Button>` accepts only a `title` string and `color` prop. It cannot be customized with custom borders, rounded corners, or icons. Always build custom buttons using `<Pressable>`.
- **Controlled `TextInput` Glitch**: Rapid typing in controlled `<TextInput>` components can cause cursor jumps or duplicate characters if state updates lag. Always use `onChangeText={(text) => setValue(text)}`.
- **`Alert.alert` Differences**: Android supports up to 3 buttons max (`positive`, `negative`, `neutral`), whereas iOS supports arbitrary action buttons. Android back button dismisses alerts unless `{ cancelable: false }` is set.

---

## 7. Expo Router Navigation

### 💡 Most Interesting Main Points
- **File-Based Navigation**: Uses folder structure in `/app` (similar to Next.js) to automatically map routes (`app/index.tsx` ➔ `/`, `app/profile/[id].tsx` ➔ `/profile/123`).
- **Universal Routing**: Automatically bridges deep links, web URLs, and native navigation stacks out of the box.

### ⚠️ Gotchas & Critical Pitfalls
- **Layout Slot Missing**: Forgetting to render `<Slot />` or `<Stack />` inside `app/_layout.tsx` results in a blank screen or navigation failure.
- **Route Params are Always Strings**: `useLocalSearchParams()` returns query/path params as `string` or `string[]`. Expecting a number (`if (params.id === 5)`) will fail due to strict type mismatch (`"5" !== 5`).
- **Imperative Navigation in Render**: Calling `router.push()` during component render body (instead of inside event handlers or `useEffect`) throws React state collision errors.

---

## 8. `FlatList` & `SectionList`

### 💡 Most Interesting Main Points
- **Virtualized Rendering**: Keeps only items currently visible on screen (plus a small buffer window) in memory, unmounting offscreen views to maintain high FPS performance on thousands of items.

### ⚠️ Gotchas & Critical Pitfalls
- **Anonymous `renderItem` Performance Hit**: Passing inline anonymous functions to `renderItem` re-creates render handlers on every parent render pass, triggering unnecessary item re-renders:
  ```tsx
  // ❌ Re-created every render
  <FlatList renderItem={({ item }) => <MyItem item={item} />} />

  // ✅ Extracted render component or useCallback
  const renderItem = useCallback(({ item }) => <MyItem item={item} />, []);
  <FlatList renderItem={renderItem} keyExtractor={(item) => item.id} />
  ```
- **Key Extractor Requirement**: `keyExtractor` MUST return a **unique string**. Using array index `(item, index) => index.toString()` as key leads to wrong UI state updates during item deletion or re-ordering.
- **Fixed Dimensions Optimization**: For fixed-height list items, providing `getItemLayout` skips dynamic layout measurement, dramatically increasing scroll speed performance.

---

## 9. AsyncStorage & SecureStore

### 💡 Most Interesting Main Points
- **AsyncStorage**: Unencrypted key-value store for non-sensitive persistent data (user preferences, app themes, cached UI state).
- **SecureStore**: Hardware-backed encrypted store leveraging **iOS Keychain** and **Android KeyStore (EncryptedSharedPreferences)** for sensitive secrets (auth tokens, API keys).

### ⚠️ Gotchas & Critical Pitfalls
- **AsyncStorage is NOT Encrypted**: Anyone with device root access or backup tools can read data in `AsyncStorage`. Never store JWT auth tokens, private keys, or credentials here!
- **SecureStore Size Limit**: `SecureStore` values are capped at **~2KB per key**. Storing large JSON blobs, user profile lists, or offline DBs in `SecureStore` throws native storage exception errors.
- **All Calls are Asynchronous**: Must always `await` storage methods or handle promises:
  ```ts
  // ❌ Wrong (returns Promise object, truthy!)
  const token = SecureStore.getItemAsync('user_token'); 

  // ✅ Correct
  const token = await SecureStore.getItemAsync('user_token');
  ```

---

## 10. Camera & Image Picker

### 💡 Most Interesting Main Points
- **Native System Integration**: `expo-image-picker` invokes system native media pickers (iOS Photos UI / Android Photo Picker), preserving user privacy without requiring full gallery permissions on modern OS versions.

### ⚠️ Gotchas & Critical Pitfalls
- **Missing Permission Check**: Calling `launchCameraAsync()` without explicitly requesting permissions (`requestCameraPermissionsAsync()`) will crash or silently reject on real iOS/Android devices.
- **Memory Crash with Base64**: Requesting high-resolution photos with `{ base64: true }` loads massive strings directly into JS memory heap, causing Out-Of-Memory (OOM) app crashes. Use file `uri` instead.
- **iOS Simulator Camera Absence**: Camera is unavailable on iOS Simulators; always handle device capability checks or mock camera behavior in development.

---

## 11. Location APIs

### 💡 Most Interesting Main Points
- **High-Accuracy Geolocation**: `expo-location` supports foreground/background tracking, geofencing, and reverse geocoding (coordinates ➔ street address).

### ⚠️ Gotchas & Critical Pitfalls
- **Permission Tier Hierarchy**: Requesting background location access **before** foreground location access is granted will automatically be rejected by iOS and Android security policies.
- **Missing Usage Descriptions**: iOS builds will crash on launch or be rejected by App Store unless `NSLocationWhenInUseUsageDescription` is configured in `app.json`.
- **Battery Drain**: Continuous `watchPositionAsync` with `Accuracy.Highest` drains mobile device battery extremely fast. Choose appropriate accuracy levels (`Accuracy.Balanced`).

---

## 12. Deep Linking

### 💡 Most Interesting Main Points
- **URL Schemes vs Universal Links**:
  - **Custom Scheme**: `myapp://profile/123` (simple, but vulnerable to scheme hijacking).
  - **Universal Links (iOS) / App Links (Android)**: `https://mydomain.com/profile/123` (secure, verified via server domain files `apple-app-site-association` and `assetlinks.json`).

### ⚠️ Gotchas & Critical Pitfalls
- **Cold Start vs Warm Start**: When app opens via deep link from closed state (cold start), `Linking.getInitialURL()` retrieves the URL. When app is already running in background (warm start), `Linking.addEventListener('url')` handles it. Expo Router handles both automatically!
- **Domain Verification Failure**: If the SHA-256 fingerprint in `assetlinks.json` does not match your release signing key, Android deep links silently fail and open in the browser instead.

---

## 13. Expo Push Notifications (Concepts & Workflow)

### 💡 Most Interesting Main Points
- **Unified Expo Push Service**: Simplifies push architecture by generating a single `ExpoPushToken` (`ExponentPushToken[xxxx]`). Your backend sends HTTP POST requests to Expo servers, and Expo routes the push payloads to **APNs (Apple)** or **FCM (Firebase/Google)**.

```
Your Server ──▶ Expo Push API ──┬──▶ APNs (Apple) ──▶ iOS Device
                                └──▶ FCM (Google) ──▶ Android Device
```

### ⚠️ Gotchas & Critical Pitfalls
- **No iOS Simulator Push Support**: Push tokens CANNOT be generated on iOS Simulators. Push notifications MUST be tested on physical iOS devices!
- **Android Notification Channels**: Android 8.0+ (API 26+) requires explicit notification channels (`AndroidNotificationPriority`, sound, channelId) before notifications can be displayed in the system tray.
- **Standalone App Credentials**: Standalone production builds (`.ipa` / `.apk`) require uploading Apple APNs `.p8` key and FCM Server Credentials to Expo project credentials manager.

---

## 14. Redux Fundamentals (Store, Slice, Actions, Reducers, `useSelector`, `useDispatch`)

### 💡 Most Interesting Main Points
- **Single Source of Truth**: Centralized global store managing predictable state transitions.
- **Redux Toolkit (RTK) + Immer**: `createSlice` uses **Immer.js** under the hood, allowing developers to write "mutating" syntax (`state.items.push(newItem)`) while producing immutable state updates safely behind the scenes.

### ⚠️ Gotchas & Critical Pitfalls
- **`useSelector` Reference Instability**: Returning new object references inside `useSelector` causes the component to re-render on EVERY dispatched action:
  ```ts
  // ❌ BAD: Returns new object reference every time -> re-renders constantly
  const { name, email } = useSelector(state => ({ name: state.user.name, email: state.user.email }));

  // ✅ GOOD: Separate selectors or shallowEqual comparison
  const name = useSelector(state => state.user.name);
  const email = useSelector(state => state.user.email);
  ```
- **Non-Serializable State**: Storing Promises, functions, dates, or class instances in Redux state causes serialization errors, breaking Redux DevTools and state persistence.
- **Outside Slice Immutability**: Direct mutations outside RTK `createSlice` reducers (e.g. inside components or middleware) violate Redux immutability rules and fail to trigger UI updates.

---

## 15. Expo Go Troubleshooting & Connection Fixes 🛠️

When facing errors like **"Something went wrong"** or **"Try reloading the app"**:

### Step 1: Clear Metro Cache
Terminal caches can retain stale bundles or broken port mappings.
```bash
npx expo start --clear
```

### Step 2: Clear Expo Go App Data (Android / iOS)
On your mobile device:
- **Android**: `Settings` ➔ `Apps` ➔ `Expo Go` ➔ `Storage & Cache` ➔ `Clear Cache` & `Clear Storage/Data`.
- **iOS**: Delete and reinstall the Expo Go app if persistent bundle caching occurs.

### Step 3: Verify Network Isolation
- Laptop and phone **MUST** be on the exact same Wi-Fi network subnet.
- Disable all **VPNs**, proxies, and firewalls on both laptop and phone.
- **Workaround (Mobile Hotspot)**: Turn on Mobile Hotspot on phone ➔ Connect laptop Wi-Fi to hotspot ➔ Run `npx expo start`.

### Step 4: Use Tunnel Mode
Tunnel mode routes your Metro bundle through Expo's secure public servers, bypassing local Wi-Fi blockages.
```bash
npx expo start --tunnel
```

---

## 16. Summary Matrix for Rapid Interview & Exam Recall 💡

| Topic | Critical Gotcha | Correct Pattern / Fix |
| :--- | :--- | :--- |
| **1. React vs RN** | Stray text outside `<Text>` crashes RN app. | Wrap all string nodes in `<Text>`. |
| **2. Architecture** | High-frequency updates choke old JSON bridge. | Use New Architecture (JSI / Fabric) or native drivers. |
| **3. Expo & Metro** | Custom native code cannot run in Expo Go. | Create Expo Dev Build (`npx expo run:android`). |
| **4. Core Components** | Remote image URIs don't render without explicit size. | Always pass explicit `{ width, height }` styles. |
| **5. Flexbox & Layout** | `ScrollView` loads all items; causes memory overflow. | Use `FlatList` for virtualized list rendering. |
| **6. User Interactions** | Core `<Button>` is completely unstyleable. | Build custom buttons with `<Pressable>`. |
| **7. Expo Router** | Route parameters are always `string` or `string[]`. | Explicitly parse numbers/booleans from params. |
| **8. Lists** | Inline `renderItem` functions cause full list re-renders. | Extract component or wrap in `useCallback`. |
| **9. Storage** | `AsyncStorage` is unencrypted plaintext store. | Use `SecureStore` for JWT tokens & secrets. |
| **10. Camera & Picker** | `{ base64: true }` high-res photo loads flood JS memory. | Use image file `uri` instead of base64 strings. |
| **11. Location APIs** | Requesting background location first gets auto-rejected. | Always request foreground location permission first. |
| **12. Deep Linking** | Unverified domain App Links open in mobile browser. | Host signed `assetlinks.json` / `apple-app-site-association`. |
| **13. Push Notifications** | Push tokens cannot be generated on iOS Simulators. | Always test push notifications on physical iOS devices. |
| **14. Redux** | Returning object literals in `useSelector` forces re-renders. | Extract primitive values or use `shallowEqual`. |
