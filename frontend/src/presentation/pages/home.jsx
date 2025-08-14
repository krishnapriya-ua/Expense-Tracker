import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import ExpenseAdd from '../../domain/useCases/ExpenseAdd'
import deleteExpense from '../../domain/useCases/deleteExpense'
import updateExpensee from '../../domain/useCases/updateExpense'
import fetchExpensee from '../../domain/useCases/fetchExpense'
import FilterExpense from '../utils/filterExpense'


export default function Homepage() {
    const [name,setName] = useState('')
    const [amount,setAmount] = useState(Number)
    const [category,setCategory] = useState('')
    const [date,setDate] = useState('')
    const [expense,setExpense] = useState([])
    const [username,setUsername] = useState('')
    const [editId,setEditId] = useState('')
    const [currentEdit,setCurrentEdit] = useState(null)
    const [filter,setFilter] = useState('')
    const [total,setTotal] = useState('')
   

    const navigate = useNavigate()

    const AddExpense = async(e) => {
        e.preventDefault()
        const response = await ExpenseAdd(name,amount,category,date)
        if(response){
            setExpense(prev=>[response,...(prev||[])])
            setName('')
            setAmount('')
            setDate('')
            setCategory('')
        }
    
    }

    useEffect(() => {
        const FetchExpense = async() => {
            const response = await fetchExpensee()
            if(response){
                setExpense(response.expense)
                setUsername(response.username)
            }
        }
        FetchExpense()
    },[])

    const handleLogout = async()=>{
        localStorage.removeItem('token')
        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    })

    const handleDelete = async(id) =>{
        if(window.confirm('Are you sure you want to delete this expense ?')){
            const response = await deleteExpense(id)
            if(response){
                setExpense(expense.filter(exp=>exp._id!==id))
            }
        }
    }

    const handleEdit = async(id,exp) => {
         try {
            setEditId(id)
            setCurrentEdit(exp)
         } catch (error) {
            console.log(error)
         }
    }


    const updateExpense = async(id) => {
        const response = await updateExpensee(id,currentEdit)
        if(response){
            setExpense(expense.map(exp => exp._id===id ? currentEdit : exp))
            setEditId('')
            setCurrentEdit(null)
        }
    }
    
    useEffect(() => {
        const filtered = FilterExpense(filter,expense)
        setExpense(filtered.expenses)
        setTotal(filtered.total)
    },[filter])


  return (
    <div className="container m-5">
        <div className="exp-row">
            <div className="exp-form">
                <div style={{justifySelf:'end'}}>
                <h6 style={{justifySelf:'end'}}>Hello {username}</h6>
                <button onClick={handleLogout} className='btn btn-secondary'>Logout</button>
                </div>
                <h5>Expense Tracker</h5>
                <form>
                    <TextInput placeholder='Expense-name' value={name} onChange={(e)=>setName(e.target.value)} />
                    <TextInput type="number" placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
                    <select className='form-control' value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <option>Select category</option>
                        <option value='Food'>Food</option>
                        <option value='Travel'>Travel</option>
                        <option value='Shopping'>Shopping</option>
                        <option value='Others'>Other</option>
                    </select>
                    <TextInput type="date" placeholder='pick the date' value={date} onChange={(e)=>setDate(e.target.value)}/>
                    <Button className='btn btn-outline-primary btn-sm text-center mt-3' onClick={AddExpense} children='Add expense'/>
                </form>
                
            </div>

            <div className="exp-table">
                <h5>Your Expenses</h5>
                
                {total >0 && <h5>You have spend a total of {total}</h5>}
                <div style={{justifySelf:'right'}}>
                <select className='form-control' onChange={(e)=>setFilter(e.target.value)}>
                    <option value="Filter" >Filter</option>
                    <option value="week">Week</option>
                    <option value="Today">Today</option>
                    <option value="Month">Month</option>
                </select>
                </div>

                <table className='table table-striped m-2'>
                    <thead>
                        <tr>
                            <th>Expense</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expense.map((exp,index) => (
                            editId===exp._id ? (
                                <tr key={index}>
                                    <td>
                                        <TextInput  value={currentEdit.name} onChange={(e) => setCurrentEdit({...currentEdit,name:e.target.value})} />
                                    </td>
                                    <td>
                                        <TextInput type="number" value={currentEdit.amount} onChange={(e) => setCurrentEdit({...currentEdit,amount:e.target.value})} />
                                    </td>
                                    <td>
                                        <select className='form-control' value={currentEdit.category} onChange={(e) => setCurrentEdit({...currentEdit,category:e.target.value})}>
                                            <option>Select category</option>
                                            <option value='Food'>Food</option>
                                            <option value='Travel'>Travel</option>
                                            <option value='Shopping'>Shopping</option>
                                            <option value='Others'>Other</option>
                                        </select>
                                    </td>
                                    <td>
                                        <TextInput type="date" value={currentEdit.date} onChange={(e) => setCurrentEdit({...currentEdit,date:e.target.value})} />
                                    </td>
                                    <td>
                                        <button onClick={()=>updateExpense(currentEdit._id)} className='btn btn-outline-success btn-sm'>ADD</button>
                                    </td>
                                </tr>
                            ):(
                                <tr key={index}>
                                <td>{exp.name}</td>
                                <td>{exp.amount}</td>
                                <td>{exp.category}</td>
                                <td>{exp.date}</td>
                                <td>
                                    <button onClick={() => handleEdit(exp._id,exp)} className='btn btn-outline-info btn-sm m-1'>Edit</button>
                                    <button onClick={() => handleDelete(exp._id)} className='btn btn-outline-danger btn-sm m-1'>Delete</button>
                                </td>
                            </tr>
                            )        
                        ))}
                    </tbody>
                </table>
                
            </div>
            
        </div>
    </div>
  )
}
