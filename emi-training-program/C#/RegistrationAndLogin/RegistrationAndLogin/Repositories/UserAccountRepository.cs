using RegistrationAndLogin.Models.Entities;
using RegistrationAndLogin.Repositories.Interfaces;
using System;
using System.Collections.Generic;

namespace RegistrationAndLogin.Repositories
{
    public class UserAccountRepository : IUserAccountRepository
    {
        private List<UserAccount> _userAccounts = new List<UserAccount>();

        public UserAccountRepository()
        {
            _userAccounts = new List<UserAccount>()
            {
                new UserAccount(
                    new User
                    {
                        FirstName = "John",
                        LastName = "Doe",
                        Email = "john.doe@company.com"
                    },
                    "Password123#"
                ),
                new UserAccount(
                    new User
                    {
                        FirstName = "Jane",
                        LastName = "Doe",
                        Email = "jane.doe@company.com"
                    },
                    "Password123#"
                ),
            };
        }

        public List<UserAccount> GetUserAccounts()
        {
            return _userAccounts;
        }

        public void AddUserAccount(UserAccount userAccount)
        {
            _userAccounts.Add(userAccount);
            Console.WriteLine("\n>>> New user added.");
        }

        public UserAccount GetAccountByEmail(string email)
        {
            return _userAccounts.Find(account => account.Username == email);
        }
    }
}
