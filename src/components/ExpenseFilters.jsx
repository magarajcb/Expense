export default function ExpenseFilters({ category, setCategory }) {
  return (
    <div className="card">
      <h2 className="section-title">Filter by Category</h2>

      <select
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Others</option>
      </select>
    </div>
  );
}