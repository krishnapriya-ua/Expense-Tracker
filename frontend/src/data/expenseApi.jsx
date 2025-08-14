import axios from "axios"

export async function AddExpense(name,amount,category,date) {
  const token = localStorage.getItem('token')
  const response = await axios.post('http://localhost:5000/expense',{name,amount,category,date},{
    headers:{

        'Authorization': `Bearer ${token}`,
        'Content-Type':'Application/json'
        }
    })
    return response.data
}

export async function DeleteExpense(id) {
  const response = await axios.delete(`http://localhost:5000/expense/${id}`)
  return response.data
}


export async function UpdateExpense(id,currentEdit) {
  const response = await axios.put(`http://localhost:5000/expense/${id}`,currentEdit)
  return response.data
}


export async function FetchExpense() {
  const response = await axios.get('http://localhost:5000/expense',{
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
    })
    return response.data
}
