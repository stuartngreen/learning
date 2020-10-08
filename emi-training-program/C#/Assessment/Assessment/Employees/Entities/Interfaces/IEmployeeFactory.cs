namespace Employees.Entities.Interfaces
{
    public interface IEmployeeFactory
    {
        IEmployee GetEmployee(string employeeType);
    }
}
