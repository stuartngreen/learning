using System;
using System.Collections.Generic;
using System.Text;

namespace Singleton
{
    public class User
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public User(string name, string email)
        {
            Name = name;
            Email = email;
        }

        public void PrintDetails()
        {
            Console.WriteLine($"Name: {Name}, Email: {Email}");
        }
    }
}
