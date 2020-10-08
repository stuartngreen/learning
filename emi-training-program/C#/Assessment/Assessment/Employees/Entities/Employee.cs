namespace Employees.Entities
{
    public abstract class Employee : IEmployee
    {
        public abstract int SickLeave();

        public abstract int PaidLeave();

        public virtual int PublicHolidays()
        {
            return 15;
        }
    }
}
