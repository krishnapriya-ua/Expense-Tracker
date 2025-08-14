import { DeleteExpense } from "../../data/expenseApi"

export default async function deleteExpense(id) {
   try {
    const response = await DeleteExpense(id)
    if(response.success){
        alert(response.message)
        return true
    }
    return false
   } catch (error) {
     console.log(error,'Axios error')
   }
}
