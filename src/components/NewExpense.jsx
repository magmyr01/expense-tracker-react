import styles from './NewExpense.module.css';
import { useForm } from 'react-hook-form';
import { useEffect } from "react";

const NewExpense = ({onAddExpense, lastId}) => {
    useEffect(() => {
        if (isSubmitSuccessful ) {
            reset({
                id: 0,
                name: "",
                type: "Select a type",
                amount: 0
            })
        }
    })
    const { register,
            handleSubmit,
            reset,
            formState: { isSubmitSuccessful, errors }
    } = useForm({
        id: 0,
        name: "",
        type: "Select a type",
        amount: 0
    });

    const onSubmit = (data) => {
        const expense = {
            ...data,
            amount: Number(data.amount),
            id: lastId + 1
        }
        onAddExpense(expense);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`container ${styles["new-expense-container"]}`}>
            <h3>Add new expense</h3>
            <div className={"row g-3 align-items-center"}>
                <div className={styles["label-style"]}>
                    <label htmlFor={"new-expense-name"} className={"col-form-label"}>Type:</label>
                </div>
                <div className={styles["input-style"]}>
                    <select
                        name="type"
                        className={"form-select"}
                        {...register("type")}
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
                        id={"new-expense-name"}
                        {...register("name", {
                            required: "Name is required"
                        })}
                        className={"form-control"}/>
                    {errors.name && (
                        <span className={`${styles["error-message"]}`}>-
                            {errors.name.message}
                        </span>
                    )}
                </div>
            </div>
            <div className={"row g-3 align-items-center"}>
                <div style={{width: '70px'}}>
                    <label htmlFor={"new-expense-amount"} className={"col-form-label"}>Amount:</label>
                </div>
                <div style={{flex: 1}}>
                    <input
                        type={"number"}
                        id={"new-expense-amount"}
                        className={"form-control"}
                        {...register("amount", {
                            required: "Amount is required"
                        })} />
                    {errors.amount && (
                        <span className={`${styles["error-message"]}`}>-
                            {errors.amount.message}
                        </span>
                    )}
                </div>
            </div>

            <button type={"submit"} className={`btn btn-primary ${styles["add-btn"]}`}>Add</button>
        </form>
    )
}

export default NewExpense;