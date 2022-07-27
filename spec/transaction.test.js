const { Transaction } = require('../lib/app')
describe('transaction', () => {
    it('checks that balance is defined', () => {
        transaction = new Transaction('debit', 10, 10)
        expect(transaction.balance).toBeDefined()
    })
    it('checks that debit for debit type is defined', () => {
        transaction = new Transaction('debit', 10, 10)
        expect(transaction.debit).toBeDefined()
    })
    it('checks that credit for debit type does not work', () => {
        transaction = new Transaction('debit', 10, 10)
        expect(transaction.credit).toEqual('')
    })
    it('checks that credit is defined', () => {
        transaction = new Transaction('credit', 10, 10)
        expect(transaction.credit).toBeDefined()
    })
    it('checks balance after debit type', () => {
        transaction = new Transaction('debit', 10, 10)
        expect(transaction.balance).toEqual(10)
    })
    it('checks that debit for credit type does not work', () => {
        transaction = new Transaction('credit', 10, 10)
        expect(transaction.debit).toEqual('')
    })
    it('checks for debit amount', () => {
        transaction = new Transaction('debit', 10, 10)
        expect(transaction.debit).toEqual(10)
    })
    it('checks balance after credit type', () => {
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