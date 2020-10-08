using Registration.Entities;
using System.Collections.Generic;

namespace Registration.Repositories.Interfaces
{
    public interface IUserAccountRepository
    {
        List<UserAccount> GetUserAccounts();

        void AddUserAccount(UserAccount userAccount);
    }
}
