class ExpenseEntity{
    constructor({name,amount,category,date,user}){
        this.name = name,
        this.amount = amount,
        this.category = category,
        this.date = date,
        this.user = user 
    }
}

module.exports = ExpenseEntity