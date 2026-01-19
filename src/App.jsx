import {useState} from "react";
import './App.css'
import Balance from "./components/Balance";
import Details from "./components/Details";

let expenseList = [
    {
        id: 1,
        name: "rent",
        amount: 8300,
        expenseType: "expense"
    },
    {
        id: 2,
        name: "food",
        amount: 6000,
        expenseType: "expense"
    },
    {
        id: 3,
        name: "Salary",
        amount: 30000,
        expenseType: "income"
    }
];

function App() {
    const [expenses, setExpenses] = useState(expenseList);

    const addExpense = (expense) => {
        setExpenses(prev => [
            ...prev,
            {
                ...expense,
                id: crypto.randomUUID()
            }
        ]);
    };

    const reduceExpense = (acc, expense) => acc += expense.amount;

    const totalIncome = expenses
        .filter(x => x.expenseType === "income")
        .reduce(reduceExpense, 0);

    const totalExpenses = expenses
        .filter(x => x.expenseType === "expense")
        .reduce(reduceExpense, 0);

    const balance = expenses.reduce((acc, item) => {
        if (item.expenseType === "expense") {
            return acc - item.amount;
        } else {
            return acc + item.amount;
        }
    }, 0);

    return (
        <>
            <div className='title-text'>
                <h1>Expense tracker app</h1>
                <Balance balance={balance} totalIncome={totalIncome} totalExpense={totalExpenses}/>
                <br/>
                <Details expenseList={expenses} onAddExpense={addExpense}/>
            </div>
        </>
    )
}

export default App