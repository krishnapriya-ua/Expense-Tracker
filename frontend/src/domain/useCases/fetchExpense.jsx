import { FetchExpense } from "../../data/expenseApi";

export default async function fetchExpensee() {
    try {
        const response = await FetchExpense()
        if(response.success){
            return {
                expense: response.expense,
                username:response.username 
            }
        }
        return null
    } catch (error) {
        console.log(error,'Error fetching expense')
    } 
}
