
const signupUser = require('../../application/usecases/SignupUser')
const loginUser = require('../../application/usecases/LoginUser')

module.exports = {
    signupUser: async(req,res) => {
        try {
            const user = await signupUser(req.body)
            res.status(200).json({message:'User saved successfully',user,success:true})
        } catch (error) {
            res.status(500).json({message:error.message,success:false,error})
        }
    } ,
    
    loginUser: async(req,res) => {
        try {
            const {username,password} = req.body
            const token = await loginUser({username,password})
            res.status(200).json({message:'User loggedin successfully',success:true,token})
        } catch (error) {
            res.status(500).json({message:error.message,success:false})
        }
    }
}