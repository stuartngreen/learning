using Registration.Services.Interfaces;
using System.Linq;

namespace Registration.Services
{
    public class ValidationService : IValidationService
    {
        const int USERNAME_MAX_LENGTH = 6;
        const int PASSWORD_MAX_LENGTH = 7;

        public ValidationService()
        {
        }

        public bool ValidateUsername(string username)
        {
            if (
                username.Length > USERNAME_MAX_LENGTH ||
                !username.Any(char.IsDigit) ||
                (!(username.Contains("#") || username.Contains("_"))) ||
                username == username.ToLower()
            )
            {
                return false;
            }
            return true;
        }

        public bool ValidatePassword(string password)
        {
            if (
               password.Length > PASSWORD_MAX_LENGTH ||
               !password.Any(char.IsDigit) ||
               (!(password.Contains("#") || password.Contains("_")))
            )
            {
                return false;
            }
            return true;
        }
    }
}
