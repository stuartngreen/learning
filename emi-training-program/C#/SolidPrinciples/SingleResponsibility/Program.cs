using System;
using System.Collections.Generic;

namespace SingleResponsibility
{
    class Program
    {
        static void Main(string[] args)
        {
            // List<Employee> employeeList = EmployeeRepository.GetEmployees();

            EmailNotification.SendEmail();
        }
    }
}
