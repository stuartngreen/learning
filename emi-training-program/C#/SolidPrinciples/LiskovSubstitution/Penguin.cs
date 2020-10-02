using System;
using System.Collections.Generic;
using System.Text;

namespace LiskovSubstitution
{
    // Penguins can't fly, but no need to implement Fly() if inheriting from Bird

    public class Penguin : Bird
    {
        public Penguin(string name) : base(name)
        {
        }

        public override void LayEggs()
        {
            Console.WriteLine($"{Name} is laying eggs...");
        }
    }
}
