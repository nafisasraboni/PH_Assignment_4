function calculateWeeklyTotal(expenses:number[]): number {
    let total=expenses.reduce((accumulation,currentValue)=>{
        accumulation+=currentValue
        return accumulation
    },0)
    return total
}

console.log(calculateWeeklyTotal([]))
