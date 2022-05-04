export default expenses => expenses
        .map(expense => expense.amount)
        .reduce((sum, currentValue) => sum + currentValue, 0);