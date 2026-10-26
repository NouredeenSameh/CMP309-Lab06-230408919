export default function FilterForm({ filterText, onFilterChange }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: "16px" }}>
      <label htmlFor="filterInput" style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
        Filter by Title:
      </label>
      <input
        id="filterInput"
        type="text"
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Type to filter..."
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #bbb",
          fontSize: "14px",
        }}
      />
    </form>
  );
}