class UserEntity {
    constructor({fullname,username,email,phonenumber,password}){
        this.fullname = fullname,
        this.username = username,
        this.email = email,
        this.phonenumber = phonenumber,
        this.password = password
    }
}

module.exports = UserEntity