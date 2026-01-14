import { useState } from "react";
import './App.css'
import Balance from "./components/Balance";
import Details from "./components/Details";

let expenseList = [
  {
    id: 1,
    name: "rent",
    amount: 2500,
    type: "expense"
  },
  {
    id: 2,
    name: "food",
    amount: 300,
    type: "expense"
  },
  {
    id: 3,
    name: "Salary",
    amount: 500,
    type: "income"
  }
];

function App() {
  const [balance] = useState(3);
  const [expenses, setExpenses] = useState(expenseList);

  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  return (
    <>
      <div className='title-text'>
        <h1>Expense tracker app</h1>
        <Balance balance={balance} totalIncome={25000} totalExpense={23000} />
        <br />
        <Details expenseList={expenses} onAddExpense={addExpense}/>
      </div>
    </>
  )
}

export default App