import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import loginUser from '../../domain/useCases/loginUser'
import { Link } from 'react-router-dom'

export default function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/home')
        }
    },[])

    const Adduser = async(e) => {
        e.preventDefault()
        const response = await loginUser(username,password)
        if(response){ 
            navigate('/home')
            setUsername('')
            setPassword('')
        }

    }
  return (
    <div>
        <div className="container m-5">
            <div className="exp-row">
                <div className="exp-form">
                    <h5 className='mb-5'>Login to Expense Tracker</h5>
                    <p className='text-center'>Not a user ? <Link to='/'>Signup</Link> </p>
                    <form>
                        <TextInput value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
                        <TextInput className='form-control my-2' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'/>        
                        <Button onClick={Adduser} children='Login here'/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
