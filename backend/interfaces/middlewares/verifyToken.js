const jwt = require('jsonwebtoken')
const secretkey = process.env.JWT_SECRET_KEY

function verifyToken(req,res,next){
    const token = req.headers['authorization']?.split(' ')[1]
    if(!token){
        return res.status(400).json({message:'No token here',success:false})
    }
    jwt.verify(token,secretkey,(err,user) =>{
        if(err){
            return res.status(400).json({message:'some error happens',err,success:false})
        }
        req.user=user
        console.log(user,'User details')
        next()
    })

}

module.exports = verifyToken