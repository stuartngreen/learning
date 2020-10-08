namespace Employees.Entities
{
    public class ProbationEmployee : Employee
    {
        public override int SickLeave()
        {
            return 12;
        }

        public override int PaidLeave()
        {
            return 9;
        }
    }
}
