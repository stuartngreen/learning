using RegistrationAndLogin.Models.Entities;
using RegistrationAndLogin.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RegistrationAndLogin.Services
{
    public class AuthenticationService
    {
        private const int LOGIN_ATTEMPTS_TIMEOUT = 3;
        private const int MAX_ALLOWED_LOGIN_ATTEMPTS = 3;

        private readonly IUserAccountRepository _userAccountRepository;
        private List<UserAccount> _userAccounts;

        public AuthenticationService(IUserAccountRepository userAccountRepository)
        {
            _userAccountRepository = userAccountRepository;
            _userAccounts = userAccountRepository.GetUserAccounts().ToList();
        }

        public void GetCredentials()
        {
            string username, password;

            Console.WriteLine("Enter username (your email address):");
            username = Console.ReadLine();

            Console.WriteLine("Enter password:");
            password = Console.ReadLine();

            if (AuthenticateUser(username, password))
            {
                Login();
            }
            else
            {
                GetCredentials();
            }
        }

        private bool AuthenticateUser(string username, string password)
        {
            var userAccount = _userAccounts.Find(account => account.Username == username);

            if (userAccount != null)
            {
                if (userAccount.Password == password)
                {
                    return true;
                }
                else
                {
                    if (userAccount.Locked)
                    {
                        if (userAccount.LockTimeStamp.Value.AddMinutes(LOGIN_ATTEMPTS_TIMEOUT) > DateTime.Now)
                        {
                            Console.WriteLine("Your account is locked. Please wait a few minutes before attempting to login again.");
                            return false;
                        }

                        userAccount.ResetAccountLock();
                    }

                    userAccount.LoginAttemptCount++;

                    if (userAccount.LoginAttemptCount == MAX_ALLOWED_LOGIN_ATTEMPTS)
                    {
                        userAccount.LockAccount();
                        Console.WriteLine($"Your account has been locked after {MAX_ALLOWED_LOGIN_ATTEMPTS} incorrect login attempts. Please wait a few minutes before trying again.");
                    }
                    else
                    {
                        Console.WriteLine($"Login failed. Please try again ({MAX_ALLOWED_LOGIN_ATTEMPTS - userAccount.LoginAttemptCount} attempt(s) remaining).");
                    }

                    return false;
                }
            }
            else
            {
                Console.WriteLine("That user account does not exist. Try again.");
                return false;
            }
        }

        private void Login()
        {
            Console.WriteLine("\n>>> Logged in successfully.");
        }
    }
}
