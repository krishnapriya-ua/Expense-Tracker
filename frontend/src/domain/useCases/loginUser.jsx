
import { LoginApi } from "../../data/authApi"

export default async function loginUser(username,password) {
  try {
    const response = await LoginApi(username,password)
    if(response.success){
        alert(response.message)
        console.log('The token',response.token)
        localStorage.setItem('token',response.token)
        return true  
    }
    return false
  } catch (error) {
    alert(error.response?.data?.message)
    console.log('error heee',error)
  }
}
