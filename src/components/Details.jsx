import styles from './Details.module.css';
import Expenses from './Expenses';
import NewExpense from "./NewExpense.jsx";

const Details = ({expenseList, onAddExpense}) => {
    return (
        <div className={`row ${styles['details-container']}`}>
            <Expenses expenseList={expenseList}/>
            <div className={styles["vl"]}></div>
            <NewExpense onAddExpense={onAddExpense}/>
        </div>
    );
};

export default Details;