using System;
using System.Collections.Generic;
using System.Text;

namespace LiskovSubstitution
{
    public abstract class Bird
    {
        public string Name { get; set; }

        public string BeakType { get; set; }

        public string[] PlumageColours { get; set; }

        public Bird(string name)
        {
            Name = name;
        }

        public abstract void LayEggs();
    }
}
