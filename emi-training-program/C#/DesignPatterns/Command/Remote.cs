using System;
using System.Collections.Generic;
using System.Text;

namespace Command
{
    public class Remote
    {
        public Remote()
        {
            Console.WriteLine("Remote is ready to use.");
        }

        public void Invoke(ICommand command)
        {
            Console.WriteLine("Invoking command.");
            command.Execute();
        }
    }
}
