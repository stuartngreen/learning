using System;
using System.Collections.Generic;
using System.Text;

namespace Registration.Entities
{
    public class RegistrationState
    {
        public int MaxAllowedAttempts { get; set; }

        public int LockTimespanInMinutes { get; set; }

        public int AttemptNumber { get; set; }

        public bool Locked { get; set; }

        public DateTime? LockTimeStamp { get; set; }

        public RegistrationState()
        {
        }

        public void Lock()
        {
            Locked = true;
            LockTimeStamp = DateTime.Now;
        }

        public void ResetLock()
        {
            AttemptNumber = 0;
            Locked = false;
            LockTimeStamp = null;
        }
    }
}
