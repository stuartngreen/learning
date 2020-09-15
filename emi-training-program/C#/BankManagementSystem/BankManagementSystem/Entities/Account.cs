using System;
using System.Collections.Generic;
using System.Text;

namespace BankManagementSystem.Entities
{
    public abstract class Account
    {
        private string id;
        private Customer customer = new Customer();
        protected double dailyLimit;
        protected double balance;
        protected IdGenerator idGenerator = new IdGenerator();
        protected string accountType;

        public abstract string GenerateAccountId();
        public abstract bool DepositAmount(double amount);
        public abstract bool WithdrawAmount(double amount);

        public Account() { }

        public Account(string id, Customer customer, double balance, double dailyLimit)
        {
            this.id = id;
            this.customer = customer;
            this.balance = balance;
            this.dailyLimit = dailyLimit;
        }

        public string GetId()
        {
            return id;
        }

        public void DisplayDetails()
        {
            customer.DisplayDetails();
            Console.WriteLine($"Account ID: {id}");
            Console.WriteLine($"Account type: {accountType}");
            Console.WriteLine($"Daily withdrawal limit: {dailyLimit}");
            Console.WriteLine($"Balance: {balance}");
        }

        public void DisplayMessage(string message)
        {
            Console.WriteLine(message);
        }

        public void CreateAccount(Customer customer)
        {
            id = GenerateAccountId();
            this.customer = customer;

            Console.WriteLine("Enter starting balance:");
            balance = double.Parse(Console.ReadLine());

            Console.WriteLine("Enter daily withdrawal limit:");
            dailyLimit = double.Parse(Console.ReadLine());

            DisplayMessage("\n##### ACCOUNT CREATED #####");
            DisplayDetails();
        }
    }
}
