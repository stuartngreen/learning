using System;

namespace DependencyInversion
{
    class Program
    {
        static void Main(string[] args)
        {
            Reminder r = new Reminder();
            Calendar c = new Calendar(r);

            c.Start();
        }
    }
}
