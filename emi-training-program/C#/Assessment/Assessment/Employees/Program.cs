using Employees.Entities;
using System;

namespace Employees
{
    class Program
    {
        static void Main(string[] args)
        {
            EmployeeFactory employeeFactory = new EmployeeFactory();
            IEmployee employee;
            string option, selectedType = "";

            while (true)
            {
                PrintMenu();

                option = Console.ReadLine();

                switch (option)
                {
                    case "1":
                        selectedType = "Permanent";
                        break;

                    case "2":
                        selectedType = "Probation";
                        break;

                    case "3":
                        selectedType = "Contract";
                        break;

                    default:
                        return;
                }

                employee = employeeFactory.GetEmployee(selectedType);

                if (employee != null)
                {   
                    Console.WriteLine($"\n{selectedType} employees get:");
                    Console.WriteLine($"{employee.SickLeave()} sick leave days,");
                    Console.WriteLine($"{employee.PaidLeave()} paid leave days, and");
                    Console.WriteLine($"{employee.PublicHolidays()} public holidays.");
                }
            }
        }

        private static void PrintMenu()
        {
            Console.WriteLine("\n------------------------");
            Console.WriteLine("Select an employee type:");
            Console.WriteLine("1. Permanent");
            Console.WriteLine("2. Probation");
            Console.WriteLine("3. Contract");
        }
    }
}
