export default function Post({ title, body }) {
  return (
    <article style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h3 style={{ textTransform: "capitalize", marginTop: 0 }}>{title}</h3>
      <p style={{ color: "#555", lineHeight: "1.5", margin: 0 }}>{body}</p>
    </article>
  );
}