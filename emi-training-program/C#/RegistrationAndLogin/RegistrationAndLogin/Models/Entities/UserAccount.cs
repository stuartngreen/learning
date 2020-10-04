using System;

namespace RegistrationAndLogin.Models.Entities
{
    public class UserAccount
    {
        public User User { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public int LoginAttemptCount { get; set; }

        public bool Locked { get; set; }

        public DateTime? LockTimeStamp { get; set; }

        public UserAccount(User user, string password)
        {
            User = user;
            Username = user.Email;
            Password = password;

            ResetAccountLock();
        }

        public void LockAccount()
        {
            Locked = true;
            LockTimeStamp = DateTime.Now;
        }

        public void ResetAccountLock()
        {
            LoginAttemptCount = 0;
            Locked = false;
            LockTimeStamp = null;
        }
    }
}
