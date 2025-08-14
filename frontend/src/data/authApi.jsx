import axios from "axios"

export  async function LoginApi(username,password) {
   const response = await axios.post('http://localhost:5000/login',{username,password})
   return response.data
}


export  async function signupApi(fullname,username,email,phonenumber,password) {
   const response = await axios.post('http://localhost:5000/user',{fullname,username,email,phonenumber,password})
   return response.data
}
