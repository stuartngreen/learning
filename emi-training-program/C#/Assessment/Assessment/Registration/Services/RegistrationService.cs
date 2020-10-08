using Registration.Entities;
using Registration.Services.Interfaces;
using System;

namespace Registration.Services
{
    public class RegistrationService
    {
        private readonly IUserAccountService _userAccountService;
        
        private readonly IValidationService _validationService;

        private RegistrationState _registrationState;

        public RegistrationService(IUserAccountService userAccountService, IValidationService validationService, int maxAttempts, int lockTimespan)
        {
            _userAccountService = userAccountService;
            _validationService = validationService;

            _registrationState = new RegistrationState()
            {
                MaxAllowedAttempts = maxAttempts,
                LockTimespanInMinutes = lockTimespan
            };
        }

        public bool ValidateRegistrationDetails(string username, string password)
        {
            if (_validationService.ValidateUsername(username) && _validationService.ValidatePassword(password))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void ProcessRegistration()
        {
            string username, password;

            Console.WriteLine("\nEnter username:");
            username = Console.ReadLine();

            Console.WriteLine("Enter password:");
            password = Console.ReadLine();

            if (ValidateRegistrationDetails(username, password))
            {
                RegisterUser(username, password);
                Console.WriteLine("\nUser registered successfully.");
            }
            else
            {
                if (_registrationState.Locked)
                {
                    if (_registrationState.LockTimeStamp.Value.AddMinutes(_registrationState.LockTimespanInMinutes) > DateTime.Now)
                    {
                        Console.WriteLine("\nThe registration process is locked. Please wait a few minutes before attempting to register again.");
                        return;
                    }
                    _registrationState.ResetLock();
                }

                Console.WriteLine("\nUsername maximum length is 6, must contain # or _, a digit, and capital letter.");
                Console.WriteLine("Password maximum length is 7, must contain # or _, and a digit.");

                _registrationState.AttemptNumber++;

                if (_registrationState.AttemptNumber == _registrationState.MaxAllowedAttempts)
                {
                    _registrationState.Lock();
                    Console.WriteLine($"\nYour registration has been locked after {_registrationState.MaxAllowedAttempts} invalid sets of credentials supplied. Please wait a few minutes before trying again.");
                    return;
                }
                else
                {
                    Console.WriteLine($"\nRegistration failed. Please try again ({_registrationState.MaxAllowedAttempts - _registrationState.AttemptNumber} attempt(s) remaining).");
                    ProcessRegistration();
                }
            }
        }

        public void RegisterUser(string username, string password)
        {
            _userAccountService.AddUserAccount(new UserAccount()
            {
                Username = username,
                Password = password
            });
        }
    }
}
