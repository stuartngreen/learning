using System;
using System.Collections.Generic;
using System.Text;

namespace InterfaceSegregation
{
    class Employee
    {
        interface IEmployee
        {
            void PaidLeave();
        }

        interface IContractEmployee
        {
            void PublicHoliday();
            void SickLeave();
        }

        class ContractEmployee : IContractEmployee
        {
            public void PublicHoliday()
            {
                throw new NotImplementedException();
            }

            public void SickLeave()
            {
                throw new NotImplementedException();
            }
        }

        class PermanentEmployee : IEmployee, IContractEmployee
        {
            public void PaidLeave()
            {
                throw new NotImplementedException();
            }

            public void PublicHoliday()
            {
                throw new NotImplementedException();
            }

            public void SickLeave()
            {
                throw new NotImplementedException();
            }
        }
    }
}
