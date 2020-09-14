using System;
using System.Collections.Generic;
using System.Text;

namespace ClassHierarchy
{
    public class Owl : Bird
    {
        public Owl(string family, string commonName, double wingSpan, bool flightless, string call, List<string> plumageColors, bool nocturnal) {
            Family = family;
            CommonName = commonName;
            WingSpan = wingSpan;
            Flightless = flightless;
            Call = call;
            PlumageColors = plumageColors;
            Nocturnal = nocturnal;
        }

        protected bool Nocturnal { get; set; }

        public override void Eat()
        {
            Console.WriteLine($"The {CommonName} likes to eat rodents.");
        }

        public override void Sound()
        {
            Console.WriteLine($"The {CommonName} says: {Call}!");
        }

        public override void PrintDetails()
        {
            var flightless = Flightless ? "Yes" : "No";
            var nocturnal = Nocturnal ? "Yes" : "No";
            var plumage = "";

            PlumageColors.ForEach(item => plumage = plumage + item + ", ");

            Console.WriteLine($"Common Name: {CommonName}");
            Console.WriteLine($"Family: {Family}");
            Console.WriteLine($"Wing Span: {WingSpan}cm");
            Console.WriteLine($"Flightless?: {flightless}");
            Console.WriteLine($"Plumage: {plumage}");
            Console.WriteLine($"Nocturnal?: {nocturnal}");
            Sound();
            Eat();
        }
    }
}
