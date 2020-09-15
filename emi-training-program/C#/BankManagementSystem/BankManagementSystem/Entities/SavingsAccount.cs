using System;
using System.Collections.Generic;
using System.Text;

namespace BankManagementSystem.Entities
{
    public class SavingsAccount : Account
    {
        public SavingsAccount() : base()
        {
            accountType = "Savings";
        }

        public SavingsAccount(string id, Customer customer, double balance, double dailyLimit) : base(id, customer, balance, dailyLimit)
        {
            accountType = "Savings";
        }

        public override string GenerateAccountId()
        {
            return "SAV" + idGenerator.GenerateId();
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
            if (amount > balance)
            {
                Console.WriteLine($"Current balance: {balance}");
                Console.WriteLine("You do not have sufficient funds.");
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
                balance -= amount;
                Console.WriteLine($"New balance after withdrawal: {balance}");
                return true;
            }
        }
    }
}
