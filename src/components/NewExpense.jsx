import styles from './NewExpense.module.css';
import { useState } from "react";

const NewExpense = ({onAddExpense, lastId}) => {
    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        type: "Select a type",
        amount: 0
    });

    const handleForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        const expense = {
            ...formData,
            amount: Number(formData.amount),
            id: lastId + 1
        }

        setFormData(expense);
        onAddExpense(expense);
    }

    return (
        <form className={`container ${styles["new-expense-container"]}`}>
            <h3>Add new expense</h3>
            <div className={"row g-3 align-items-center"}>
                <div className={styles["label-style"]}>
                    <label htmlFor={"new-expense-name"} className={"col-form-label"}>Type:</label>
                </div>
                <div className={styles["input-style"]}>
                    <select
                        name="type"
                        value={formData.type}
                        className={"form-select"}
                        onChange={handleForm}
                        aria-label={"Select expense type"}>
                        <option value="default" hidden={true}>Select a type</option>
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
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleForm}
                        id={"new-expense-name"}
                        className={"form-control"}/>
                </div>
            </div>
            <div className={"row g-3 align-items-center"}>
                <div style={{width: '70px'}}>
                    <label htmlFor={"new-expense-amount"} className={"col-form-label"}>Amount:</label>
                </div>
                <div style={{flex: 1}}>
                    <input
                        type={"number"}
                        name="amount"
                        value={formData.amount}
                        onChange={handleForm}
                        id={"new-expense-amount"}
                        className={"form-control"}/>
                </div>
            </div>

            <button type={"button"} onClick={handleClick} className={`btn btn-primary ${styles["add-btn"]}`}>Add</button>
        </form>
    )
}

export default NewExpense;