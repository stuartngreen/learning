using System;
using System.Collections.Generic;
using System.Text;

namespace Command
{
    public class SkipTrackCommand : ICommand
    {
        public SkipTrackCommand()
        {
        }

        public void Execute()
        {
            Console.WriteLine("Skipping to next track...");
        }
    }
}
