using BankManagementSystem.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BankManagementSystem.Repositories
{
    class AccountRepository
    {
        public List<Account> GetAccounts()
        {
            return new List<Account>
            {
                new SavingsAccount("SAV001", new Customer(1, "Stuart", new DateTime(1980, 02, 21)), 1500, 1500),
                new CurrentAccount("CUR001", new Customer(2, "Jane", new DateTime(1995, 08, 11)), 0, 1500)
            };
        }
    }
}
