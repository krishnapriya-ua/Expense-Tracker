const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

const expenseController = require('../controllers/expenseController')


router.post('/',verifyToken,expenseController.AddExpense)

router.get('/',verifyToken,expenseController.FetchExpense)

router.delete('/:id',expenseController.DeleteExpense)

router.put('/:id',expenseController.UpdateExpense)


module.exports = router