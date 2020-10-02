using System;
using System.Collections.Generic;
using System.Text;

namespace DependencyInversion
{
    public class Reminder : ICalendar
    {
        public DateTime startTime;
        public string title;
        public string description;

        public void Start()
        {
            Console.WriteLine("Reminder set!");
        }
    }
}
