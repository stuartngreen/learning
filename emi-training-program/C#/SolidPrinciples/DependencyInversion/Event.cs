using System;
using System.Collections.Generic;
using System.Text;

namespace DependencyInversion
{
    public class Event : ICalendar
    {
        public DateTime startTime;
        public DateTime endTime;
        public string title;
        public string description;
        public void Start()
        {
            Console.WriteLine("Event started!");
        }
    }
}
