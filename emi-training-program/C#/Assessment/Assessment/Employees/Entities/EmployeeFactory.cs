using Employees.Entities.Interfaces;

namespace Employees.Entities
{
    public class EmployeeFactory : IEmployeeFactory
    {
        public IEmployee GetEmployee(string employeeType)
        {
            switch (employeeType)
            {
                case "Permanent":
                    return new PermanentEmployee();

                case "Probation":
                    return new ProbationEmployee();

                case "Contract":
                    return new ContractEmployee();

                default:
                    return null;
            }
        }
    }
}
