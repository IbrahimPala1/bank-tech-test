const { Transaction } = require('../lib/app')
describe('transaction', () => {

    it('checks for debit balance', () => {
        transaction = new Transaction('debit', 10, 10)
        expect(transaction.balance).toEqual(10)
    })
    it('checks for debit amount', () => {
        transaction = new Transaction('debit', 10, 10)
        expect(transaction.debit).toEqual(10)
    })
    it('checks for credit balance', () => {
        transaction = new Transaction('credit', 10, 10)
        expect(transaction.balance).toEqual(10)
    })
    it('checks for credit amount', () => {
        transaction = new Transaction('credit', 10, 10)
        expect(transaction.credit).toEqual(10)
    })
    it('checks for date', () => {
        transaction = new Transaction
        expect(transaction.date.length).toEqual(10)
    }) 

})