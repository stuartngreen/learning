using System;
using System.Collections.Generic;
using System.Text;

namespace DependencyInversion
{
    public class Calendar : ICalendar
    {
        ICalendar calendar;

        public Calendar(ICalendar _calendar)
        {
            calendar = _calendar;
        }

        public void Start()
        {
            calendar.Start();
        }
    }
}
