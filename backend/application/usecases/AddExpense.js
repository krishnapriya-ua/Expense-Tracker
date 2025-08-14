const ExpenseEntity = require('../../domain/entities/ExpenseEntity')
const Expense = require('../../infrastructure/db/models/expense')

async function AddExpense({name,amount,category,date,userId}) {
    const Expenseentity = new ExpenseEntity({
        name:name,
        amount:amount,
        category:category,
        date:date,
        user:userId
    })
    const expense = new Expense(Expenseentity)
    return await expense.save()
    
}
module.exports = AddExpense