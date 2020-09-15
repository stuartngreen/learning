using System;
using System.Collections.Generic;
using System.Text;

namespace BankManagementSystem.Entities
{
    public class CurrentAccount : Account
    {
        private double transactionFee = 1.50;

        public CurrentAccount() : base()
        {
            accountType = "Current";
        }

        public CurrentAccount(string id, Customer customer, double balance, double dailyLimit) : base(id, customer, balance, dailyLimit)
        {
            accountType = "Current";
        }

        public override string GenerateAccountId()
        {
            return "CUR" + idGenerator.GenerateId();
        }

        public override bool DepositAmount(double amount)
        {
            Console.WriteLine($"Previous balance: {balance}");
            balance += amount;
            Console.WriteLine($"New balance after deposit: {balance}");
            return true;
        }

        public override bool WithdrawAmount(double amount)
        {
            if (amount + transactionFee > balance)
            {
                Console.WriteLine($"Current balance: {balance}");
                Console.WriteLine("You do not have sufficient funds to withdraw and cover the transaction fee.");
                return false;
            }
            else if (amount > dailyLimit)
            {
                Console.WriteLine($"Current balance: {balance}");
                Console.WriteLine($"You cannot withdraw more than {dailyLimit} per day.");
                return false;
            }
            else
            {
                Console.WriteLine($"Previous balance: {balance}");
                balance -= amount + transactionFee;
                Console.WriteLine($"New balance after withdrawal: {balance}");
                return true;
            }
        }
    }
}
