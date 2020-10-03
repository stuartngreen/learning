using System;
using System.Collections.Generic;
using System.Text;

namespace AttributesAndReflection
{
    [AttributeUsage(AttributeTargets.Class)]
    public class Artist : Attribute
    {
        public string Name { get; set; }

        public string Genre { get; set; }

        public Artist(string name, string genre)
        {
            Name = name;
            Genre = genre;
        }
    }
}
