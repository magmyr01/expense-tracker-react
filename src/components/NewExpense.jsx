import styles from './NewExpense.module.css';
import { useForm } from 'react-hook-form';
import React, { useEffect } from "react";

const NewExpense = ({onAddExpense}) => {
    const { register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful, errors }
    } = useForm({
        defaultValues: {
            name: "",
            expenseType: "Select a type",
            amount: 0
        }
    });

    useEffect(() => {
        if (isSubmitSuccessful ) {
            reset({
                name: "",
                expenseType: "Select a type",
                amount: 0
            })
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = (data) => {
        const expenseWithoutId = {
            ...data,
            amount: Number(data.amount)
        }
        onAddExpense(expenseWithoutId);
    }

    console.log("Rerendering of new expense component")

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`container ${styles["new-expense-container"]}`}>
            <h3>Add new expense</h3>
            <div className={`row align-items-center ${styles["new-expense-row"]}`}>
                <div className={styles["label-style"]}>
                    <label htmlFor={"new-expense-name"} className={"col-form-label"}>Type:</label>
                </div>
                <div className={styles["input-style"]}>
                    <select
                        name="expenseType"
                        className={"form-select"}
                        {...register("expenseType", {
                            required: "Type is required"
                        })}
                        aria-label={"Select expense type"}>
                        <option value="default" hidden={true}>Select a type</option>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    {errors.expenseType && (
                        <span className={`${styles["error-message"]}`}>-
                            {errors.expenseType.message}
                        </span>
                    )}
                </div>
            </div>
            <div className={`row align-items-center ${styles["new-expense-row"]}`}>
                <div className={styles["label-style"]}>
                    <label htmlFor={"new-expense-name"} className={"col-form-label"}>Name:</label>
                </div>
                <div className={styles["input-style"]}>
                    <input
                        autoComplete="off"
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
            <div className={`row align-items-center ${styles["new-expense-row"]}`}>
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

const NewExpenseMemo = React.memo(NewExpense);
export { NewExpenseMemo };