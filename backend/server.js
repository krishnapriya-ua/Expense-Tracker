const express = require('express')
const cors = require('cors')

require('./infrastructure/db/connect.js')
require('dotenv').config()


const userRoute = require('./interfaces/routes/userRoute.js')
const expenseRoute = require('./interfaces/routes/expenseRoute.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/',userRoute)
app.use('/expense',expenseRoute)



app.listen(5000,(req,res)=>{
    console.log('Server running on port 5000')
})