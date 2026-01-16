const ExpenseToIcon = ({entryType}) => {
    if (entryType === "income") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" color={"green"} width="16" height="16" fill="currentColor"
                 className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
            </svg>
        )
    } else if (entryType === "expense") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" color={"red"} width="16" height="16" fill="currentColor"
                 className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"/>
            </svg>
        )
    }
}

export default ExpenseToIcon;