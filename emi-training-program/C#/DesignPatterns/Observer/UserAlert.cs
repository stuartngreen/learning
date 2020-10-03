using System;
using System.Collections.Generic;
using System.Text;

namespace Observer
{
    public class UserAlert : IObserver
    {
        private User _user;

        public UserAlert(User user, ISubject subject)
        {
            _user = user;
            subject.AddObserver(this);
        }

        public void alert(string stockStatus, Product product)
        {
            Console.WriteLine($"Hello, {_user.Name}! \"{product.Name}\" is now \"{stockStatus}\".");
        }
    }
}
