// Derived and abstract classes example

abstract class Account
{
    public customerName: string;
    public accountNo: number;
    public accountType: string;
    public balance: number;
    protected transactionHistory: TransactionHistory;

    constructor() {
        this.transactionHistory = new TransactionHistory();
    }
    
    public setDetails(customerName: string, accountNo: number, accountType: string, balance: number): void {
        this.customerName = customerName;
        this.accountNo = accountNo;
        this.accountType = accountType;
        this.balance = balance;

        this.transactionHistory.recordTransaction(new Date, 'Opening balance', balance, balance);
    }

    public displayDetails(): void {
        console.log(`Customer name: ${ this.customerName }`);
        console.log(`Customer account no.: ${ this.accountNo }`);
        console.log(`Account type: ${ this.accountType }`);
        console.log(`Account balance: ${ this.balance }`);
    }

    public getBalance(): number {
        return this.balance;
    }

    public displayTransactionHistory(): void {
        this.transactionHistory.displayTransactionHistory();
    }

    public abstract deposit(amount: number): void;

    public abstract withdraw(amount: number): void;
}

class CurrentAccount extends Account
{
    public deposit(amount: number): void {
        this.balance += amount;
        this.transactionHistory.recordTransaction(new Date(), 'Deposit', amount, this.balance);
    }

    public withdraw(amount: number): void {
        if (this.balance > amount) {
            this.balance -= amount;
            this.transactionHistory.recordTransaction(new Date(), 'Withdrawal', -amount, this.balance);
            
            if (this.balance < 500) {
                let penalty = (500 - this.balance) / 100;
                this.balance -= penalty;
                this.transactionHistory.recordTransaction(new Date(), 'Penalty fee', -penalty, this.balance);
            }
        }
        else {
            console.log('Insufficient funds, please make use of the overdraft facility.');
        }
    }
}

// class SavingsAccount extends Account {
//
// }

class Transaction 
{
    constructor(
        public date: Date,
        public type: string,
        public amount: number,
        public balance: number
    ){
    }
}

class TransactionHistory {
    private transactions: Array<Transaction>;

    constructor() {
        this.transactions = new Array<Transaction>();
    }

    public recordTransaction(date: Date, type: string, amount: number, balance: number): void {
        let transaction = new Transaction(date, type, amount, balance);
        this.transactions.push(transaction);
    }

    public displayTransactionHistory(): void {
        this.transactions.forEach(transaction => {
            console.log(transaction.date, transaction.type, transaction.amount, transaction.balance);
        });
    }
}

let myAccount = new CurrentAccount();

myAccount.setDetails('Stuart Green', 123456789, 'Current', 2000);
myAccount.deposit(200);
myAccount.deposit(500);
myAccount.withdraw(100);
myAccount.deposit(1000);
myAccount.withdraw(1500);
myAccount.withdraw(1500);
myAccount.withdraw(100);
myAccount.withdraw(200);
myAccount.withdraw(100);

myAccount.displayDetails();
myAccount.displayTransactionHistory();
