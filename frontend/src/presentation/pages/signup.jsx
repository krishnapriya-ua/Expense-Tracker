import React, { useState } from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import signupUser from '../../domain/useCases/signupUser'

export default function Signup() {
    const [fullname,setFullname] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const Adduser = async(e) => {
        e.preventDefault()
        const response = await signupUser(fullname,username,email,phonenumber,password)
        if(response){
            setFullname('')
            setUsername('')
            setEmail('')
            setPhonenumber('')
            setPassword('')
            navigate('/login')
        }
    }

  return (
    <div>
        <div className="container m-5">
            <div className="exp-row">
                <div className="exp-form">
                    <h5 className='mb-5'>Signup to Expense Tracker</h5>
                    <p className='text-center'>Already a user ? <Link to='/login'>Login</Link> </p>
                    <form>
                        <TextInput value={fullname} onChange={(e)=>setFullname(e.target.value)} placeholder='Fullname' />
                        <TextInput value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
                        <TextInput type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                        <TextInput value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} placeholder='Phonenumber'/>
                        <TextInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='form-control my-2' />
                        <Button onClick={Adduser} children='Signup'/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
