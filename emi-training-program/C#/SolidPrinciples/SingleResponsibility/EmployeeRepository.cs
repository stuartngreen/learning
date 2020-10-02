using System;
using System.Collections.Generic;
using System.Text;

namespace SingleResponsibility
{
    class EmployeeRepository
    {
        public static List<Employee> GetEmployees()
        {
            return new List<Employee>()
            {
                new Employee { Id = 45, Name = "John", Location = "Pune" },
                new Employee { Id = 67, Name = "Sam", Location = "New York" },
                new Employee { Id = 12, Name = "Mayura", Location = "Bangalore" }
            };
        }

        public static bool DeleteEmployee(int id)
        {
            var employeeToDelete = GetEmployees().Find(employee => employee.Id == id);
            GetEmployees().Remove(employeeToDelete);
            return true;
        }
    }
}
