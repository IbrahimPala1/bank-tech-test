
class bankStatementList {
    adding (credit, balance = 0) {
        if(credit > 0) {
            return credit.push(balance)
        }
    }  
}
const first = new bankStatementList()
const second = new bankStatementList()
console.log(first.adding(4))
console.log(second.adding(6))