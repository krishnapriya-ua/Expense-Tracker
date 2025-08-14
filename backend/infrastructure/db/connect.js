const mongoose = require('mongoose')

mongoose
.connect('mongodb://localhost:27017/expense-tracker')
.then(()=>console.log('Mongodb connected successfully'))
.catch(()=>console.log('mongodb not connected'))