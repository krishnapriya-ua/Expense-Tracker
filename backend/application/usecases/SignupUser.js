const UserEntity = require('../../domain/entities/UserEntity')
const User = require('../../infrastructure/db/models/user')
const bcrypt = require('bcrypt')

async function signupUser({fullname, username, email, phonenumber, password}) {
    if(!fullname || !username || !email || !phonenumber ||!password) {
        throw new Error('Fill all fields!!')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const existinguser = await User.findOne({email})

    if (existinguser) {
        throw new Error('User already exists')
    }

    const userentity = new UserEntity({
        fullname: fullname,
        username: username, 
        email: email, 
        phonenumber: phonenumber, 
        password: hashedPassword
    })

    const user = new User(userentity)
    return await user.save()
}

module.exports = signupUser