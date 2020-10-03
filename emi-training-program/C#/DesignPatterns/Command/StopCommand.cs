using System;
using System.Collections.Generic;
using System.Text;

namespace Command
{
    public class StopCommand : ICommand
    {
        public StopCommand()
        {
        }

        public void Execute()
        {
            Console.WriteLine("Music stops playing.");
        }
    }
}
