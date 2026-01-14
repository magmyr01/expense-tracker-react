import styles from './NewExpense.module.css';

const NewExpense = ({onAddExpense}) => {
    const handleClick = () => {
        const expense = {
            id: 4,
            amount: 0,
            type: "expense",
            name: "ExpenseTest"
        };

        onAddExpense(expense);
    };

    return (
        <div className={`container ${styles["new-expense-container"]}`}>
            <h3>Add new expense</h3>
            <div className={"row g-3 align-items-center"}>
                <div className={styles["label-style"]}>
                    <label htmlFor={"new-expense-name"} className={"col-form-label"}>Type:</label>
                </div>
                <div className={styles["input-style"]}>
                    <select className={"form-select"} aria-label={"Select expense type"}>
                        <option selected>Select a type</option>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>
            </div>
            <div className={"row g-3 align-items-center"}>
                <div className={styles["label-style"]}>
                    <label htmlFor={"new-expense-name"} className={"col-form-label"}>Name:</label>
                </div>
                <div className={styles["input-style"]}>
                    <input type={"text"} id={"new-expense-name"} className={"form-control"}/>
                </div>
            </div>
            <div className={"row g-3 align-items-center"}>
                <div style={{width: '70px'}}>
                    <label htmlFor={"new-expense-amount"} className={"col-form-label"}>Amount:</label>
                </div>
                <div style={{flex: 1}}>
                    <input type={"number"} id={"new-expense-amount"} className={"form-control"}/>
                </div>
            </div>

            <button type={"button"} onClick={handleClick} className={`btn btn-primary ${styles["add-btn"]}`}>Add</button>
        </div>
    )
};

export default NewExpense;