using BankManagementSystem.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace BankManagementSystem.Entities
{
    public class Bank
    {
        private AccountRepository accountRepository = new AccountRepository();
        private List<Account> accounts;
        private string input;
        private Account account;
        private Customer customer = new Customer();

        public Bank() {
            accounts = accountRepository.GetAccounts();
        }

        public void CreateAccount()
        {
            Console.WriteLine("Select an account type:");
            Console.WriteLine("1. Savings");
            Console.WriteLine("2. Current");

            do
            {
                input = Console.ReadLine();
            }
            while (input != "1" && input != "2");

            switch (input)
            {
                case "1":
                    account = new SavingsAccount();
                    break;

                case "2":
                    account = new CurrentAccount();
                    break;
            }

            customer.CreateCustomer();
            account.CreateAccount(customer);
            accounts.Add(account);
        }

        public Account GetAccount()
        {
            Console.WriteLine("Enter the account ID number:");
            input = Console.ReadLine();
            return accounts.Find(account => account.GetId() == input);
        }

        public void ShowAccountDetails()
        {
            account = GetAccount();

            if (account != null)
            {
                account.DisplayDetails();
            }
            else
            {
                Console.WriteLine("Account ID does not exist.");
            }
        }

        public void ProcessDeposit()
        {
            account = GetAccount();

            if (account != null)
            {
                Console.WriteLine("Enter the amount to deposit:");
                input = Console.ReadLine();

                double.TryParse(input, out double amount);
                account.DepositAmount(amount);
            }
            else
            {
                Console.WriteLine("Account ID does not exist.");
            }
        }

        public void ProcessWithdrawal()
        {
            account = GetAccount();

            if (account != null)
            {
                Console.WriteLine("Enter the amount to withdraw:");
                input = Console.ReadLine();

                double.TryParse(input, out double amount);
                account.WithdrawAmount(amount);
            }
            else
            {
                Console.WriteLine("Account ID does not exist.");
            }
        }
    }
}
