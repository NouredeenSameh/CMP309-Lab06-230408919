import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}