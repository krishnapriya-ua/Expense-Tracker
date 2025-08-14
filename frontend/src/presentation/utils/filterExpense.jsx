

export default function FilterExpense(filter,expenseList) {
  try {
    let filteredExpense = []
    if(filter==='Today'){
        const today = new Date().toISOString().slice(0,10)
        console.log(today,'Innathe divasam')
        filteredExpense = expenseList.filter(exp=>exp.date===today)
    }

    else if(filter==='week'){
        const today = new Date()
        const prevsunday = new Date(today)
        prevsunday.setDate(today.getDate()-today.getDay())
        const nextsunday = new Date(prevsunday)
        nextsunday.setDate(prevsunday.getDate()+7)
                   
        const lastsunday = prevsunday.toISOString().slice(0,10)
        const comingsunday = nextsunday.toISOString().slice(0,10)

        console.log(lastsunday,'lastsunday')
        console.log(comingsunday,'comingsunday')

        filteredExpense = expenseList.filter(exp => {
          return  exp.date<=comingsunday && exp.date>=lastsunday
        })
    }

    else if(filter==='Month'){
        const today = new Date()
        const firstday = new Date(today.getFullYear(),today.getMonth(),1)
        const lastday = new Date(today.getFullYear(),today.getMonth()+1,0)

        const lastmonth = firstday.toISOString().slice(0,10)
        const nextmonth = lastday.toISOString().slice(0,10)

        console.log(lastmonth,'Lastmonth')
        console.log(nextmonth,'Nextmonth')

        filteredExpense= expenseList.filter(exp => {
          return  exp.date>lastmonth && exp.date<=nextmonth
        })
    }
    else{
      filteredExpense= [...expenseList]
    }
    const total = filteredExpense.reduce((sum,exp) => sum+exp.amount,0)


    return {expenses:filteredExpense,total}
  } catch (error) {
    console.log(error,'Error fetching expense filtered')
  }
}
