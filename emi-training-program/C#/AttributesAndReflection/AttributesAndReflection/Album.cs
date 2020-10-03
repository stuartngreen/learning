using System;
using System.Collections.Generic;
using System.Text;

namespace AttributesAndReflection
{
    [AttributeUsage(AttributeTargets.Class)]
    public class Album : Attribute
    {
        public string Title { get; set; }

        public int Year { get; set; }

        public Album(string title, int year)
        {
            Title = title;
            Year = year;
        }
    }
}
