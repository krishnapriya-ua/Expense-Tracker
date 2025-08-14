const Expense = require('../../infrastructure/db/models/expense')
const AddExpense = require('../../application/usecases/AddExpense')
const FetchExpense = require('../../application/usecases/FetchExpense')
const DeleteExpense = require('../../application/usecases/DeleteExpense')
const UpdateExpense = require('../../application/usecases/UpdateExpense')

module.exports = {
    AddExpense: async(req,res) => {
        try {
            const {name,amount,category,date} = req.body
            const expense = await AddExpense({name,amount,category,date,userId:req.user.id})
            res.status(200).json({message:'Expense saved successfully',success:true,expense})
        } catch (error) {
            res.status(500).json({message:'Internal server error',success:false,error})
        }
    },

    FetchExpense: async(req,res) => {
        try {
            const userId = req.user.id
            const username = req.user.username
            const expense = await FetchExpense({userId}) 
            res.status(200).json({message:'Expense fetched Successfully',expense,success:true,username})
        } catch (error) {
            res.status(500).json({message:'Internal server error',success:false})
        }
    },

    DeleteExpense: async(req,res) => {
        try {
            const {id} = req.params
            const expense = await DeleteExpense(id)
            res.status(200).json({message:'Deleted successfully',success:true})
        } catch (error) {
            res.status(500).json({message:'Internal server error',success:false})
        }
    },

    UpdateExpense: async(req,res) => {
        try {
            const {id} = req.params
            const {name,amount,category,date} = req.body
            const expense = await UpdateExpense({id,name,amount,category,date})
            res.status(200).json({message:'Edited successfully',success:true})
        } catch (error) {
            res.status(500).json({message:'Internal server error',success:false})
        }
    }
}