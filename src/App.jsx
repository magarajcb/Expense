import { useEffect, useMemo, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilters from "./components/ExpenseFilters";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  const [category, setCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses = useMemo(() => {
    if (category === "All") return expenses;
    return expenses.filter((e) => e.category === category);
  }, [expenses, category]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="title">💰 My  financial diary </h1>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        <ExpenseForm onAdd={addExpense} />

        <div className="md:col-span-2 space-y-4">
          <ExpenseFilters category={category} setCategory={setCategory} />
          <ExpenseList
            expenses={filteredExpenses}
            onDelete={deleteExpense}
          />
        </div>

       
        <ExpenseChart expenses={filteredExpenses} />
      </div>
    </div>
  );
}