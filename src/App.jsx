import { useState } from "react";
import './App.css'
import Balance from "./components/Balance";
import Details from "./components/Details";

let expenseList = [
  {
    id: 1,
    name: "rent",
    amount: 8300,
    type: "expense"
  },
  {
    id: 2,
    name: "food",
    amount: 6000,
    type: "expense"
  },
  {
    id: 3,
    name: "Salary",
    amount: 30000,
    type: "income"
  }
];

function App() {
  const [expenses, setExpenses] = useState(expenseList);

  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  const getTotalExpenses = () => {
    let total = 0;
    expenses.filter(x => x.type === "expense").forEach(x => total += x.amount);

    return total;
  }

  const getTotalIncome = () => {
    let total = 0;
    expenses.filter(x => x.type === "income").forEach(x => total += x.amount);

    return total;
  }

  const getBalance = () => {
    let bal = 0;

    for(let entry of expenses) {
      if(entry.type === "income") {
        bal += entry.amount;
      }
      else if(entry.type === "expense") {
        bal -= entry.amount;
      }
    }

    return bal;
  }

  return (
    <>
      <div className='title-text'>
        <h1>Expense tracker app</h1>
        <Balance balance={getBalance()} totalIncome={getTotalIncome()} totalExpense={getTotalExpenses()} />
        <br />
        <Details expenseList={expenses} onAddExpense={addExpense} lastId={expenses[expenses.length - 1].id}/>
      </div>
    </>
  )
}

export default App