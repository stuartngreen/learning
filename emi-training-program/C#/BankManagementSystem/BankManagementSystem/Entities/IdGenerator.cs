using System;
using System.Collections.Generic;
using System.Text;

namespace BankManagementSystem.Entities
{
    public class IdGenerator
    {
        static int id = 0;

        public IdGenerator() { }

        public string GenerateId()
        {
            string now = DateTime.Now.ToString("yyyy-MM");
            return now + ++id;
        }
    }
}
