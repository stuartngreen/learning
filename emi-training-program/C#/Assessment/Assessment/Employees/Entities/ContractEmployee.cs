namespace Employees.Entities
{
    public class ContractEmployee : Employee
    {
        public override int SickLeave()
        {
            return 5;
        }

        public override int PaidLeave()
        {
            return 0;
        }
    }
}
