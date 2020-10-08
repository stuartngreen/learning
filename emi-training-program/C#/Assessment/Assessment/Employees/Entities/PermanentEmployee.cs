namespace Employees.Entities
{
    public class PermanentEmployee : Employee
    {
        public override int SickLeave()
        {
            return 12;
        }

        public override int PaidLeave()
        {
            return 18;
        }
    }
}
