class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = [];
    }
    balance() {
        let total = 0
        for (let i = this.transactions.length-1; i >= 0; i--) {
            total = total + this.transactions[i].amount
        }
        return "Your total is: " + total
    }
    deposit(amt) {
        this.transactions.push(new Transaction(this.accountNumber, this.owner, this.owner, amt))
    }
    charge(payee, amt) {
        this.transactions.push(new Transaction(this.accountNumber, this.owner, payee, amt))
    }
}

class Transaction extends BankAccount {
    constructor(accountNumber, owner, payee, amount) {
        super(accountNumber, owner)
        this.amount = amount;
        this.payee = payee;
    }
}

let Ethan = new BankAccount('123123', 'Ethan Foshee')
console.log(Ethan)

Ethan.deposit(13432)
Ethan.deposit(34)
Ethan.deposit(34)
Ethan.deposit(34)
Ethan.deposit(34)

console.log(Ethan.balance())

console.log(Ethan.charge("Davey", -42))

console.log(Ethan.balance())
console.log(Ethan.transactions)