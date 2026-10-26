import { useReducer, useState, useEffect } from "react";
import { postsReducer, initialState } from "./reducer/postsReducer";
import { fetchPosts } from "./api/postsApi";
import FilterForm from "./components/FilterForm";
import PostList from "./components/PostList";

export default function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPosts(controller.signal);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        if (err.name !== "AbortError") {
          dispatch({
            type: "FETCH_ERROR",
            payload: err.message || "Failed to fetch posts.",
          });
        }
      }
    }

    loadData();

    return () => {
      controller.abort();
    };
  }, []);

  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase().trim())
  );

  return (
    <main style={{ maxWidth: "800px", margin: "30px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <h1>Post Dashboard</h1>

      <FilterForm filterText={filterText} onFilterChange={setFilterText} />

      {state.loading && <p>Loading posts...</p>}

      {state.error && (
        <p style={{ color: "red", backgroundColor: "#fee", padding: "10px", borderRadius: "4px" }}>
          Error: {state.error}
        </p>
      )}

      {!state.loading && !state.error && filteredPosts.length === 0 && (
        <p>No posts found.</p>
      )}

      {!state.loading && !state.error && filteredPosts.length > 0 && (
        <PostList posts={filteredPosts} />
      )}
    </main>
  );
}