using System;

namespace Command
{
    class Program
    {
        static void Main(string[] args)
        {
            // Invoker
            var remote = new Remote();

            // Commands
            var play = new PlayCommand();
            var stop = new StopCommand();
            var skip = new SkipTrackCommand();

            // Client invokes commands
            remote.Invoke(play);
            remote.Invoke(skip);
            remote.Invoke(skip);
            remote.Invoke(skip);
            remote.Invoke(stop);
        }
    }
}
