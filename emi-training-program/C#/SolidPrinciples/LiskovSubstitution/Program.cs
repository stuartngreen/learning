using System;

namespace LiskovSubstitution
{
    class Program
    {
        static void Main(string[] args)
        {
            var penguin = new Penguin("Chinstrap Penguin");
            penguin.LayEggs();

            var finch = new Finch("Zebra Finch");
            finch.LayEggs();
            finch.Fly();
        }
    }
}
