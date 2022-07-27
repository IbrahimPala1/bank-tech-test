Makers Academy Week 10 - Bank-Tech-Test


***Specification***
**Requirements**

* You should be able to interact with your code via a REPL like IRB or Node. 
   * You don't need to implement a command line interface that takes input from STDIN.
* Must inclide Deposits and withdrawal.
* Must inclide Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).


**Acceptance criteria**
* Given a client makes a deposit of 1000 on 10-01-2023
* And a withdrawal of 500 on 14-01-2023
* When she prints her bank statement
* Then she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```


* User stories-

```
As a user, 
so that i can put money in the bank
i want to be able to deposit money

As a user, 
so that i can take money out my bank
i want to be able to withdraw money

As a user, 
so that i can see how much my bank balance is
i want a statement showing me my balance

As a user,
so that i can see which dates i deposited and withdrew money
i want to see the date next to each transaction
```

**Domain Model**

![Alt text](/domain/Screenshot%202022-07-27%20at%2012.03.34.png)



**Functionaility of program in Node**

* Step 1

```
> let account = new Account(create new instance of Account)
undefined
```
* Step 2(deposit 400)

```
> account.deposit(400)
undefined
```
* Step 3(withdraw 200)

```
> account.withdraw(200)
undefined
```

* Step 4(deposit 100)
```
> account.deposit(100)
undefined
```
* Step 5(show total balance)
```
> account.balance
300
```
* Step 6(show account statement)
```
> account.statement()
date       ||credit||debit||balance
27/06/2022 || 400:00 ||   || 400:00
27/06/2022 ||  || 200:00  || 200:00
27/06/2022 || 100:00 ||   || 300:00
```





