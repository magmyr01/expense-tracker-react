import styles from './Expenses.module.css';
import ExpenseToIcon from "./ExpenseToIcon.jsx";

const Expenses = ({expenseList}) => {
    return (
        <table className={"table table-hover"} style={{flex:2}}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            {
                expenseList.map(expense => (
                    <tr key={expense.id}>
                        <td>{expense.id}</td>
                        <td>{expense.name}</td>
                        <td>{expense.amount}</td>
                        <td><ExpenseToIcon entryType={expense.type} /></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default Expenses;