using BankManagementSystem.Entities;
using System;

namespace BankManagementSystem
{
    class Program
    {
        static void Main()
        {
            string input;
            Bank bank = new Bank();

            while (true)
            {
                PrintMenu();

                input = Console.ReadLine();

                switch (input)
                {
                    case "1":
                        bank.CreateAccount();
                        break;

                    case "2":
                        bank.ShowAccountDetails();
                        break;

                    case "3":
                        bank.ProcessDeposit();
                        break;

                    case "4":
                        bank.ProcessWithdrawal();
                        break;

                    case "5":
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
            Console.WriteLine("Welcome to the Bank Management System.");
            Console.WriteLine("How we can help you?");
            Console.WriteLine("\t1. Create Account");
            Console.WriteLine("\t2. Show Account Details");
            Console.WriteLine("\t3. Deposit Amount");
            Console.WriteLine("\t4. WithDraw Amount");
            Console.WriteLine("\t5. Clear Screen");
            Console.WriteLine("--------------------------------------");
            Console.WriteLine();
        }
    }
}
