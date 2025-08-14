import { AddExpense } from "../../data/expenseApi";


export default async function ExpenseAdd(name,amount,category,date) {
    try {
        const response = await AddExpense(name,amount,category,date)
        if(response.success){
            console.log('Expense kittettund',response.expense)
            return response.expense
        }
        return null
    } catch (error) {
        alert(error.response?.data?.message)
        console.log(error)
    }
   
}
