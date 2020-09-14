using System;
using System.Collections.Generic;

namespace ClassHierarchy
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> owlPlumage = new List<string> { "light brown", "off-white", "speckled" };
            Owl barnOwl = new Owl("Tytonidae", "Eastern barn owl", 110, false, "hoot hoot", owlPlumage, true);
            barnOwl.PrintDetails();

        }
    }
}
