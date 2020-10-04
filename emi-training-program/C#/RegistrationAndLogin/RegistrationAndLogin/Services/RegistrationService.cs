using RegistrationAndLogin.Models.Entities;
using RegistrationAndLogin.Repositories.Interfaces;
using System;

namespace RegistrationAndLogin.Services
{
    public class RegistrationService
    {
        private readonly IUserAccountRepository _userAccountRepository;
        private readonly ValidationService _validationService = new ValidationService();
        private readonly MailService _mailService = new MailService();

        public RegistrationService(IUserAccountRepository userAccountRepository)
        {
            _userAccountRepository = userAccountRepository;
        }

        public void RegisterNewUser()
        {
            var user = CaptureUserDetails();
            var password = CapturePassword();
            AddUserAccount(new UserAccount(user, password));
            _mailService.SendRegistrationEmail(user.FirstName, user.Email);
        }

        private User CaptureUserDetails()
        {
            var user = new User();
            var invalidEmail = true;
            string input;

            Console.WriteLine("Enter your first name:");
            user.FirstName = Console.ReadLine();

            Console.WriteLine("Enter your last name:");
            user.LastName = Console.ReadLine();

            Console.WriteLine("Enter your email address:");
            input = Console.ReadLine();

            while (invalidEmail)
            {
                if (!_validationService.ValidateEmailAddress(input))
                {
                    Console.WriteLine("Enter a valid email address (all lowercase):");
                    input = Console.ReadLine();
                }
                else if (_userAccountRepository.GetAccountByEmail(input) != null)
                {
                    Console.WriteLine($"{new Exception("That email address is already in the system. Try again:")}");
                    input = Console.ReadLine();
                }
                else
                {
                    invalidEmail = false;
                }
            }

            user.Email = input;

            return user;
        }

        private string CapturePassword()
        {
            string password1, password2;

            Console.WriteLine("Create a password:");
            password1 = Console.ReadLine();

            while (!_validationService.ValidatePasswordFormat(password1))
            {
                password1 = Console.ReadLine();
            }

            Console.WriteLine("Confirm your password:");
            password2 = Console.ReadLine();

            while (!_validationService.ValidatePasswordEquality(password1, password2))
            {
                Console.WriteLine("Your password confirmation didn't match. Try again:");
                password2 = Console.ReadLine();
            }

            return password1;
        }

        private void AddUserAccount(UserAccount userAccount)
        {
            _userAccountRepository.AddUserAccount(userAccount);
        }
    }
}
