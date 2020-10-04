using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace RegistrationAndLogin.Services
{
    public class ValidationService
    {
        const int MIN_PASSWORD_LENGTH = 12;

        public ValidationService()
        {
        }

        public bool ValidateEmailAddress(string email)
        {
            if (email != email.ToLower())
            {
                return false;
            }

            Regex regex = new Regex(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$");

            return regex.IsMatch(email);
        }

        public bool ValidatePasswordFormat(string password)
        {
            if (password.Length < MIN_PASSWORD_LENGTH)
            {
                Console.WriteLine($"Password must be at least {MIN_PASSWORD_LENGTH} characters.");
                return false;
            }

            if (password == password.ToLower())
            {
                Console.WriteLine($"Password must contain at least one UPPERCASE character.");
                return false;
            }

            if (!password.Any(char.IsDigit))
            {
                Console.WriteLine($"Password must contain at least one digit (0-9).");
                return false;
            }

            if (!(password.Contains("#") || password.Contains("_")))
            {
                Console.WriteLine($"Password must contain either the # or _ special character.");
                return false;
            }

            return true;
        }

        public bool ValidatePasswordEquality(string password1, string password2)
        {
            return password1 == password2;
        }
    }
}
