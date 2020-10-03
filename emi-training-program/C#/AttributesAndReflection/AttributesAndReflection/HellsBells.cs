using System;
using System.Collections.Generic;
using System.Text;

namespace AttributesAndReflection
{
    [Artist("AC/DC", "Rock")]
    [Album("Back in Black", 1980)]
    public class HellsBells : ISong
    {
        public string Title { get; }

        public TimeSpan Length { get; }

        public HellsBells()
        {
            Title = "Hell's Bells";
            Length = new TimeSpan(0, 5, 10);
        }

        public void Play()
        {
            Console.WriteLine($"Now playing \"{Title}\" ({Length.Minutes}:{Length.Seconds})");
        }
    }
}
