import styles from './Balance.module.css';

const Balance = ({ balance, totalIncome, totalExpense }) => {
    return (
        <div className="row" style={{ boxShadow: "3px 3px 3px 3px gray", width: "400px", margin: "auto" }}>
            <h2>Balance: {balance}</h2>
            <div className="row">
                <div className="col">
                    <label className={`row ${styles.total}`}>Total income:</label>
                    <label className={`row ${styles.total} ${styles['total-number']} ${styles['total-income']}`}>{totalIncome}</label>
                </div>
                <div className="col">
                    <label className={`row ${styles.total}`}>Total expenses:</label>
                    <label className={`row ${styles.total} ${styles['total-number']} ${styles['total-expense']}`}>{totalExpense}</label>
                </div>
            </div>
        </div>);
};

export default Balance;