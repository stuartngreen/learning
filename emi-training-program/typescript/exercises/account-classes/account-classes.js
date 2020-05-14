// Derived and abstract classes example
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account() {
        this.transactionHistory = new TransactionHistory();
    }
    Account.prototype.setDetails = function (customerName, accountNo, accountType, balance) {
        this.customerName = customerName;
        this.accountNo = accountNo;
        this.accountType = accountType;
        this.balance = balance;
        this.transactionHistory.recordTransaction(new Date, 'Opening balance', balance, balance);
    };
    Account.prototype.displayDetails = function () {
        console.log("Customer name: " + this.customerName);
        console.log("Customer account no.: " + this.accountNo);
        console.log("Account type: " + this.accountType);
        console.log("Account balance: " + this.balance);
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.displayTransactionHistory = function () {
        this.transactionHistory.displayTransactionHistory();
    };
    return Account;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        this.transactionHistory.recordTransaction(new Date(), 'Deposit', amount, this.balance);
    };
    CurrentAccount.prototype.withdraw = function (amount) {
        if (this.balance > amount) {
            this.balance -= amount;
            this.transactionHistory.recordTransaction(new Date(), 'Withdrawal', -amount, this.balance);
            if (this.balance < 500) {
                var penalty = (500 - this.balance) / 10;
                this.balance -= penalty;
                this.transactionHistory.recordTransaction(new Date(), 'Penalty fee', -penalty, this.balance);
            }
        }
        else {
            console.log('Insufficient funds, please make use of the overdraft facility.');
        }
    };
    return CurrentAccount;
}(Account));
// class SavingsAccount extends Account {
//
// }
var Transaction = /** @class */ (function () {
    function Transaction(date, type, amount, balance) {
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.balance = balance;
    }
    return Transaction;
}());
var TransactionHistory = /** @class */ (function () {
    function TransactionHistory() {
        this.transactions = new Array();
    }
    TransactionHistory.prototype.recordTransaction = function (date, type, amount, balance) {
        var transaction = new Transaction(date, type, amount, balance);
        this.transactions.push(transaction);
    };
    TransactionHistory.prototype.displayTransactionHistory = function () {
        this.transactions.forEach(function (transaction) {
            console.log(transaction.date, transaction.type, transaction.amount, transaction.balance);
        });
    };
    return TransactionHistory;
}());
var myAccount = new CurrentAccount();
myAccount.setDetails('Stuart Green', 123456789, 'Current', 2000);
myAccount.deposit(200);
myAccount.deposit(500);
myAccount.withdraw(100);
myAccount.deposit(1000);
myAccount.withdraw(1500);
myAccount.displayDetails();
myAccount.displayTransactionHistory();
