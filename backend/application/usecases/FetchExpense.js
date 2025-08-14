const ExpenseEntity = require('../../domain/entities/ExpenseEntity')
const Expense = require('../../infrastructure/db/models/expense')

async function FetchExpense({userId}) {
     const expense = await Expense.find({user:userId}).sort({_id:-1})  
     return expense
}

module.exports = FetchExpense