import {useMemo, useState, useCallback} from "react";
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

    const addExpense = useCallback((expense) => {
        setExpenses(prev => [
            ...prev,
            {
                ...expense,
                id: crypto.randomUUID()
            }
        ]);
    }, []);

    const deleteExpense = (id) => {
        setExpenses(prev => prev.filter(x => x.id !== id));
    };

    const reduceExpense = (acc, expense) => acc += expense.amount;

    const totalIncome = useMemo(() => {
        return expenses
            .filter(x => x.expenseType === "income")
            .reduce(reduceExpense, 0)
    }, [expenses]);

    const totalExpenses = useMemo(() => {
        return expenses
            .filter(x => x.expenseType === "expense")
            .reduce(reduceExpense, 0)
    }, [expenses]);

    const balance = useMemo(() => {
        return expenses.reduce((acc, item) => {
            if (item.expenseType === "expense") {
                return acc - item.amount;
            } else {
                return acc + item.amount;
            }
        }, 0)
    }, [expenses]);

    return (
        <>
            <div className='title-text'>
                <h1>Expense tracker app</h1>
                <Balance balance={balance} totalIncome={totalIncome} totalExpense={totalExpenses}/>
                <br/>
                <Details expenseList={expenses} onAddExpense={addExpense} onDeleteExpense={deleteExpense}/>
            </div>
        </>
    )
}

export default App