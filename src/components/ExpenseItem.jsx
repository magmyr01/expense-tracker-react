import ExpenseToIcon from "./ExpenseToIcon.jsx";

const ExpenseItem = ({expense, onDeleteExpense}) => {
    return (
        <tr id={`animate-${expense.id}`}>
            <td>{expense.id}</td>
            <td>{expense.name}</td>
            <td>{expense.amount}</td>
            <td>
                <ExpenseToIcon entryType={expense.expenseType}/>
            </td>
            <td>
                <button type={"button"} className={"btn btn-danger"} onClick={() => onDeleteExpense(expense.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default ExpenseItem;