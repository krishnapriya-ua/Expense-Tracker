
import { signupApi } from "../../data/authApi"

export default async function signupUser(fullname,username,email,phonenumber,password) {
  try {
    const response = await signupApi(fullname,username,email,phonenumber,password)
    if(response.success){
        console.log('User Data',response.user)
        alert(response.message)
        return true
    }
    return false
  } catch (error) {
    alert(error.response?.data?.message)
     console.log('error happened',error.response?.data?.message)   
  }
}
