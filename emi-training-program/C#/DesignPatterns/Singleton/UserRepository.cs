using System;
using System.Collections.Generic;
using System.Text;

namespace Singleton
{
    public sealed class UserRepository
    {
        private static UserRepository _instance = null;

        private static readonly object _lock = new object();

        private List<User> _userData;

        private UserRepository()
        {
            _userData = new List<User>();
        }

        public static UserRepository Instance
        {
            get
            {
                lock (_lock)
                {
                    if (_instance == null)
                    {
                        _instance = new UserRepository();
                    }
                    return _instance;
                }
            }
        }

        public List<User> GetUsers()
        {
            return _userData;
        }

        public void AddUser(User user)
        {
            _userData.Add(user);
        }
    }
}
