import ExpenseToIcon from "./ExpenseToIcon.jsx";

const ExpenseItem = ({expense}) => {
    return (
        <tr>
            <td>{expense.id}</td>
            <td>{expense.name}</td>
            <td>{expense.amount}</td>
            <td>
                <ExpenseToIcon entryType={expense.expenseType}/>
            </td>
        </tr>
    );
};

export default ExpenseItem;