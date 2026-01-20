import ExpenseToIcon from "./ExpenseToIcon.jsx";
import ExpenseItem from "./ExpenseItem.jsx";

const Expenses = ({expenseList, onDeleteExpense}) => {
    return (
        <table className={"table table-hover"} style={{flex: 2}}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody id="animate-container">
            {expenseList.map(expense => (
                <ExpenseItem key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense}/>
            ))
            }
            </tbody>
        </table>
    );
};

export default Expenses;