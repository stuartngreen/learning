using System;
using System.Collections.Generic;
using System.Text;

namespace Command
{
    public class PlayCommand : ICommand
    {
        public PlayCommand()
        {
        }

        public void Execute()
        {
            Console.WriteLine("Music starts playing...");
        }
    }
}
