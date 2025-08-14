
const User = require('../../infrastructure/db/models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretkey = process.env.JWT_SECRET_KEY

async function loginUser({username, password}) {
    if( !username ||!password) {
        throw new Error('Fill all fields!!')
    }
    const existinguser = await User.findOne({username})
    if(!existinguser){
        throw new Error('This user dont exists')
    }
    const passwordMatch = await bcrypt.compare(password,existinguser.password)
    if(!passwordMatch){
        throw new Error('Password does not match,sorry')
    }
    const token = jwt.sign({id:existinguser._id,username:existinguser.username},secretkey,{expiresIn:'1hr'})
    return token
}

module.exports = loginUser