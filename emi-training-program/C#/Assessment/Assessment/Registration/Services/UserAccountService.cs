using System.Collections.Generic;
using Registration.Entities;
using Registration.Repositories.Interfaces;

namespace Registration.Services
{
    class UserAccountService : IUserAccountService
    {
        private readonly IUserAccountRepository _userAccountRepository;

        public UserAccountService(IUserAccountRepository userAccountRepository)
        {
            _userAccountRepository = userAccountRepository;
        }

        public UserAccount CreateUserAccount(string username, string password)
        {
            return new UserAccount()
            {
                Username = username,
                Password = password
            };
        }

        public List<UserAccount> GetUserAccounts()
        {
            return _userAccountRepository.GetUserAccounts();
        }

        public void AddUserAccount(UserAccount userAccount)
        {
            _userAccountRepository.AddUserAccount(userAccount);
        }
    }
}
