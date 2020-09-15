using System;
using System.Collections.Generic;
using System.Text;

namespace BankManagementSystem.Entities
{
    public class Customer
    {
        public int id;
        public string name;
        public DateTime dateOfBirth;

        public Customer() { }

        public Customer(int id, string name, DateTime dateOfBirth)
        {
            this.id = id;
            this.name = name;
            this.dateOfBirth = dateOfBirth;
        }

        public void DisplayDetails()
        {
            Console.WriteLine($"Customer ID number: {id}");
            Console.WriteLine($"Customer name: {name}");
            Console.WriteLine($"Customer date of birth: {dateOfBirth.ToString("MM/dd/yyyy")}");
        }

        public void CreateCustomer()
        {
            Console.WriteLine("Enter customer ID number:");
            int.TryParse(Console.ReadLine(), out id);

            Console.WriteLine("Enter customer name:");
            name = Console.ReadLine();

            dateOfBirth = GetDateOfBirth();
        }

        public DateTime GetDateOfBirth()
        {
            Console.WriteLine("Enter customer date of birth (MM/dd/yyyy):");

            while (true)
            {
                if (DateTime.TryParse(Console.ReadLine(), out DateTime result))
                {
                    return result;
                }
                else
                {
                    Console.WriteLine("Please enter a date in the correct format (MM/dd/yyyy).");
                }
            }
        }
    }
}
