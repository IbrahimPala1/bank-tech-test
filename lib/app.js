class Transaction {
  constructor (type, amount, balance){
  this.date = creatingDate();
  this.credit = '';
  this.debit = '';
  this.balance = balance ;
  if (type === 'debit') {
      this.debit = amount ;
    } else {
      this.credit = amount ;
    }
  }
}

 class Account {
  constructor (balance = 0,) {
  this.balance = balance;
  this.transactions = [];
  this.date = creatingDate()
  }
deposit (amount) {
  this.balance = this.balance + amount;
  this.transactions.push(new Transaction('credit', amount, this.balance))
}
withdraw (amount) {
  this.balance = this.balance - amount;
  this.transactions.push(new Transaction('debit', amount, this.balance))
}
statement () {
  this.header = "date       ||credit||debit||balance"
  console.log(this.header)
  const attempt = this.transactions.forEach(element => console.log(element.date, '||',  
      element.credit, '||', element.debit, '',  '||', element.balance))
}
}

const creatingDate = () => {
  var date = new Date();
  var dd = date.getDate();
  var mm = date.getMonth();
  var yy = date.getFullYear();

  if(dd < 10) {
       dd = '0' + dd
  }
  if(mm < 10) {
       mm = '0' + mm
  }

  date = dd + '/' + mm + '/' + yy
  return date
}

module.exports = { Account, Transaction }

