
import { UpdateExpense } from "../../data/expenseApi";

export default async function updateExpensee(id,currentEdit) {
  try {
    const response = await UpdateExpense(id,currentEdit)
    if(response.success){
        alert(response.message)
        return true
    }
    return false
  } catch (error) {
    console.log(error,'Update error')
  }
}
