const Expense = require('../../infrastructure/db/models/expense')

async function DeleteExpense(id) {
    const expense =  await Expense.findByIdAndDelete(id)
    return expense
}

module.exports = DeleteExpense