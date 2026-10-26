# Assignment 6 - Post Dashboard

A React application built with Vite handling asynchronous data fetching, state management using `useReducer`, controlled inputs, and derived filtering state.

## File Organization
- `src/api/postsApi.js`: Dedicated asynchronous data fetching layer using native `fetch` with `AbortController` signal support. Completely decoupled from UI logic.
- `src/reducer/postsReducer.js`: Pure reducer managing predictable state transitions (`FETCH_START`, `FETCH_SUCCESS`, `FETCH_ERROR`) and guaranteeing immutable updates.
- `src/components/Post.jsx`: Pure presentational component responsible for rendering an individual post item.
- `src/components/PostList.jsx`: Pure list renderer receiving posts via props and rendering items using `.map()` with stable keys.
- `src/components/FilterForm.jsx`: Controlled form component managing the text search input.
- `src/App.jsx`: Top-level orchestrator holding `useReducer` and local search query `useState`. Computes filtered posts on-the-fly as derived state during render.

## Challenges Faced
1. **Preventing Race Conditions & Memory Leaks**: Ensuring that asynchronous calls in `useEffect` cleanly abort on component unmount using `AbortController` without dispatching errors for intentionally aborted requests.
2. **Strict Adherence to Derived State**: Avoiding storing filtered results in a second state variable or sync effect, instead deriving `filteredPosts` directly during the render cycle to eliminate state desynchronization.
3. **Pure Reducer Separation**: Keeping async network requests out of the reducer and maintaining strict immutability within all reducer action branches.