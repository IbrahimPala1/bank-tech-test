const { Account } = require('../lib/app')

describe('Account', () => {
    beforeEach (() => {
        account = new Account
    })
    it('checks to see that initial balance value is 0', () => {
        expect(account.balance).toEqual(0)
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
    it('checks to see a mixture of withdraw and depopsit ',() => {
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



// describe('Date', () => {
//     beforeEach = () => {
//         const creatingDate = () => {
//             var date = new Date();
//             var dd = date.getDate();
//             var mm = date.getMonth();
//             var yy = date.getFullYear();
          
//             if(dd < 10) {
//                  dd = '0' + dd
//             }
//             if(mm < 10) {
//                  mm = '0' + mm
//             }
          
//             date = dd + '/' + mm + '/' + yy
//             return date
//           }
//     }
// })