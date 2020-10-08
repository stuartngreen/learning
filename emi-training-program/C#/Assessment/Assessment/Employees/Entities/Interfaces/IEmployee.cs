namespace Employees.Entities
{
    public interface IEmployee
    {
        int SickLeave();

        int PaidLeave();

        int PublicHolidays();
    }
}
