using Registration.Entities;
using Registration.Repositories.Interfaces;
using System.Collections.Generic;

namespace Registration.Repositories
{
    public class UserAccountRepository : IUserAccountRepository
    {
        private List<UserAccount> _userAccounts = new List<UserAccount>();

        public UserAccountRepository()
        {
            _userAccounts = new List<UserAccount>();
        }

        public List<UserAccount> GetUserAccounts()
        {
            return _userAccounts;
        }

        public void AddUserAccount(UserAccount userAccount)
        {
            _userAccounts.Add(userAccount);
        }
    }
}
