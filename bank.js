class bankStatement {
    constructor (date, credit = 0, balance) {
        this.date = date
        this.credit = credit
        this.balance = balance

    }
}

const example = new bankStatement('12,03,2022', this.credit, 3000)
console.log(example)

class bankStatementList {
    constructor () {
        this.list = []
    }
    addToList (bankStatement) {
        this.list.push(bankStatement)
        return this.list
    }
    getTotalBalance() {
        const total = this.list.map((total) => total.credit)
        let sum = 0
        for(let i =0; i < total.length; i++) {
            sum += total[i]
        }
        console.log(total)
        console.log(sum)

    }
}

const first = new bankStatementList()
first.addToList(new bankStatement('21/06/2021', 500, 4000))
first.addToList(new bankStatement('23/06/2021', 300, 4000))
first.addToList(new bankStatement('03/07/2021', 450, 4000))
console.log(first)
console.log(first.getTotalBalance())


module.exports = bankStatementList

balance = 0
if credit > 0 + credit to balance 
console.log credit
if ccredit < 0 - credit from balance 
console.log credit