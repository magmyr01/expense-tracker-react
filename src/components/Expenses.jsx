import ExpenseToIcon from "./ExpenseToIcon.jsx";
import ExpenseItem from "./ExpenseItem.jsx";

const Expenses = ({expenseList}) => {
    return (
        <table className={"table table-hover"} style={{flex: 2}}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            {expenseList.map(expense => (
                <ExpenseItem key={expense.id}
                             expense={expense}/>
            ))
            }
            </tbody>
        </table>
    );
};

export default Expenses;