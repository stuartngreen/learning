using System;
using System.Collections.Generic;
using System.Text;

namespace LiskovSubstitution
{
    public class Finch : FlyingBird
    {
        public Finch(string name) : base(name)
        {
        }

        public override void Fly()
        {
            Console.WriteLine($"{Name} is flying...");
        }

        public override void LayEggs()
        {
            Console.WriteLine($"{Name} is laying eggs...");
        }
    }
}
