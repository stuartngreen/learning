using RegistrationAndLogin.Models.Entities;
using System.Collections.Generic;

namespace RegistrationAndLogin.Repositories.Interfaces
{
    public interface IUserAccountRepository
    {
        List<UserAccount> GetUserAccounts();

        void AddUserAccount(UserAccount userAccount);

        UserAccount GetAccountByEmail(string email);
    }
}
