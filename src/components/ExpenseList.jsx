export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="card text-center text-slate-400">
        No expenses found
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="section-title">Expenses</h2>

      <div className="space-y-3 max-h-[360px] overflow-auto">
        {expenses.map((e) => (
          <div
            key={e.id}
            className="flex justify-between items-center border rounded-xl p-3 hover:bg-white transition"
          >
            <div>
              <p className="font-medium">
                ₹{e.amount} • {e.category}
              </p>
              <p className="text-sm text-slate-500">
                {e.date} {e.note && `- ${e.note}`}
              </p>
            </div>

            <button
              onClick={() => onDelete(e.id)}
              className="btn-danger"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}