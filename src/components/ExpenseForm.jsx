import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const submit = () => {
    if (!amount || !date) return;

    onAdd({
      id: Date.now(),
      amount: Number(amount),
      category,
      date,
      note,
    });

    setAmount("");
    setNote("");
  };

  return (
    <div className="card">
      <h2 className="section-title">Add Expense</h2>

      <input className="input" type="number" placeholder="Amount"
        value={amount} onChange={(e) => setAmount(e.target.value)} />

      <select className="input" value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Others</option>
      </select>

      <input className="input" type="date"
        value={date} onChange={(e) => setDate(e.target.value)} />

      <input className="input" placeholder="Note"
        value={note} onChange={(e) => setNote(e.target.value)} />

      <button className="btn-primary w-full mt-2" onClick={submit}>
        Add Expense
      </button>
    </div>
  );
}