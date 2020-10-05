using RegistrationAndLogin.Repositories;
using RegistrationAndLogin.Services;
using System;

namespace RegistrationAndLogin
{
    class Program
    {
        static void Main(string[] args)
        {
            var userAccountRepository = new UserAccountRepository();
            var authenticationService = new AuthenticationService(userAccountRepository);
            var registrationService = new RegistrationService(userAccountRepository);
            string input;

            while (true)
            {
                PrintMenu();

                input = Console.ReadLine();

                switch (input)
                {
                    case "1":
                        registrationService.RegisterNewUser();
                        break;

                    case "2":
                        authenticationService.GetCredentials();
                        break;

                    case "3":
                        Console.Clear();
                        break;

                    default:
                        return;
                }
            }
        }

        static void PrintMenu()
        {
            Console.WriteLine();
            Console.WriteLine("--------------------------------------");
            Console.WriteLine("Choose an option");
            Console.WriteLine("\t1. Register new user");
            Console.WriteLine("\t2. Login");
            Console.WriteLine("\t3. Clear screen");
            Console.WriteLine("--------------------------------------");
            Console.WriteLine();
        }
    }
}
