const { Account } = require('../lib/app')

describe('Account', () => {
    beforeEach (() => {
        account = new Account
    })
    it('checks to see that initial balance value is 0', () => {
        expect(account.balance).toEqual(0)
    })
    it('deposits 10 to account and expects balance to be 10', () => {
        account.deposit(10)
        expect(account.balance).toEqual(10)
    })
    it('withdraws 10 from account and expects balance to be -10', () => {
        account.withdraw(10)
        expect(account.balance).toEqual(-10)
    })
    it('checks to see 300 withdrawn ',() => {
        account.withdraw(300)
        expect(account.balance).toEqual(-300)
    })
    it('checks to see 300 deposited ',() => {
        account.deposit(300)
        expect(account.balance).toEqual(300)
    })
    it('checks to see two transactions can be withdrawn ',() => {
        account.withdraw(300)
        account.withdraw(200)
        expect(account.balance).toEqual(-500)
    })
    it('checks to see two transactions can be deposited ',() => {
        account.deposit(300)
        account.deposit(200)
        expect(account.balance).toEqual(500)
    })
    it('checks to see a mixture of withdraw and depopsit equals to the correct balance ',() => {
        account.deposit(200)
        account.withdraw(100)
        account.deposit(200)
        account.withdraw(100)
        expect(account.balance).toEqual(200)
    })
    it('checks for date', () => {
        expect(account.date.length).toEqual(10)
    })
})
describe('transactions array', () => {
    beforeEach (() => {
        account = new Account
    })
    it('checks transactions array has a length of 1', () => {
        account.withdraw(100)
        expect(account.transactions.length).toEqual(1)
    })
    it('checks transactions array has a length of 2', () => {
        account.withdraw(100)
        account.deposit(200)
        expect(account.transactions.length).toEqual(2)
    })
    it('checks that the transactions array has a date', () => {
        account.withdraw(20)
        expect(account.transactions[0].date).toBeDefined()
    })
    it('checks that the transaction array has a balance', () => {
        account.withdraw(20)
        expect(account.transactions[0].balance).toBeDefined()
    })
    it('checks that the transaction array has a credit column', () => {
        account.withdraw(20)
        expect(account.transactions[0].credit).toBeDefined()
    })
    it('checks that the transaction array has debit column', () => {
        account.withdraw(20)
        expect(account.transactions[0].debit).toBeDefined()
    })
    it('checks that debit column is 20 when withdraw is 20 ', () => {
        account.withdraw(20)
        expect(account.transactions[0].debit).toEqual(20)
    })
    it('checks that credit column is empty when withdraw is 20 ', () => {
        account.withdraw(20)
        expect(account.transactions[0].credit).toEqual('')
    })
    it('checks that credit column is 20 when deposit is 20 ', () => {
        account.deposit(20)
        expect(account.transactions[0].debit).toEqual('')
    })
    it('checks that credit column is 20 when deposit is 20 ', () => {
        account.deposit(20)
        expect(account.transactions[0].credit).toEqual(20)
    })
    it('checks that balance column is 20 when deposit is 20 ', () => {
        account.deposit(20)
        expect(account.transactions[0].balance).toEqual(20)
    })
    it('checks that balance column is -20 when withdraw is 20 ', () => {
        account.withdraw(20)
        expect(account.transactions[0].balance).toEqual(-20)
    })
    it('checks that balance column is 5 when 10 is deposited and 5 is withdrawn ', () => {
        account.deposit(10)
        account.withdraw(5)
        expect(account.transactions[1].balance).toEqual(5)
    })
})
