using Registration.Repositories;
using Registration.Services;
using System;

namespace Registration
{
    class Program
    {
        static void Main(string[] args)
        {
            var userAccountService = new UserAccountService(new UserAccountRepository());
            var validationService = new ValidationService();
            var registration = new RegistrationService(userAccountService, validationService, 3, 2);

            string option;

            while (true)
            {
                Console.WriteLine("\nSelect an option:");
                Console.WriteLine("1. Register");
                Console.WriteLine("2. Clear Screen");

                option = Console.ReadLine();

                switch (option)
                {
                    case "1":
                        registration.ProcessRegistration();
                        break;

                    case "2":
                        Console.Clear();
                        break;

                    default:
                        return;
                }
            }
        }
    }
}
