using Registration.Entities;
using System.Collections.Generic;

namespace Registration.Services
{
    public interface IUserAccountService
    {
        List<UserAccount> GetUserAccounts();

        UserAccount CreateUserAccount(string username, string password);

        void AddUserAccount(UserAccount userAccount);
    }
}
