const Expense = require('../../infrastructure/db/models/expense')
async function UpdateExpense({id,name,amount,category,date}) {
    const expense = await Expense.findByIdAndUpdate(id,{
        name,
        amount,
        category,
        date
    },{new:true})
    return expense
}

module.exports = UpdateExpense