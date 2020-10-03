using System;

namespace Singleton
{
    class Program
    {
        static void Main(string[] args)
        {
            var userRepo1 = UserRepository.Instance;
            var userRepo2 = UserRepository.Instance;

            var newUser1 = new User("John", "john@company.com");
            var newUser2 = new User("Jane", "jane@company.com");

            userRepo1.AddUser(newUser1);
            userRepo1.AddUser(newUser2);

            // Repo 2 has the same users as Repo 1 - same instance.
            foreach (var user in userRepo2.GetUsers())
            {
                user.PrintDetails();
            }
        }
    }
}
