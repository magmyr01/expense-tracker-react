import styles from './Details.module.css';
import Expenses from './Expenses';
import { NewExpenseMemo } from "./NewExpense.jsx";

const Details = ({expenseList, onAddExpense, onDeleteExpense}) => {
    return (
        <div className={`row ${styles['details-container']}`}>
            <Expenses expenseList={expenseList} onDeleteExpense={onDeleteExpense}/>
            <div className={styles["vl"]}></div>
            <NewExpenseMemo onAddExpense={onAddExpense}/>
        </div>
    );
};

export default Details;