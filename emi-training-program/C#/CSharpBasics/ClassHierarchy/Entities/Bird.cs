using System;
using System.Collections.Generic;
using System.Text;

namespace ClassHierarchy
{
    public abstract class Bird : IAnimal
    {
        public Bird() { }

        public Bird(string family, string commonName, double wingSpan, bool flightless, string call, List<string> plumageColors) {
            Family = family;
            CommonName = commonName;
            WingSpan = wingSpan;
            Flightless = flightless;
            Call = call;
            PlumageColors = plumageColors;
        }

        public string Family { get; set; }

        public string CommonName { get; set; }

        protected double WingSpan { get; set; }

        protected bool Flightless { get; set; }

        protected string Call { get; set; }

        protected List<string> PlumageColors { get; set; }

        public abstract void Sound();

        public abstract void Eat();

        public virtual void PrintDetails()
        {
            var plumage = "";
            PlumageColors.ForEach(item => plumage = plumage + item + ", ");

            Console.WriteLine($"Common Name: {CommonName}");
            Console.WriteLine($"Family: {Family}");
            Console.WriteLine($"Wing Span: {WingSpan}cm");
            Console.WriteLine($"Plumage: {plumage}");
            Sound();
            Eat();
        }

    }
}
