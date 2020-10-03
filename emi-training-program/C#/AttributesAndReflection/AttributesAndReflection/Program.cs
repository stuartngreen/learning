using System;

namespace AttributesAndReflection
{
    class Program
    {
        static void Main(string[] args)
        {
            var type = typeof(HellsBells);
            var attributes = Attribute.GetCustomAttributes(type);


            // Get attributes using reflection
            foreach (Attribute attribute in attributes)
            {
                Console.WriteLine(attribute);

                if (attribute is Artist)
                {
                    Artist artist = (Artist)attribute;
                    Console.WriteLine($"Artist: {artist.Name}, Genre: {artist.Genre}");
                }

                if (attribute is Album)
                {
                    Album album = (Album)attribute;
                    Console.WriteLine($"Album: {album.Title}, Year: {album.Year}");
                }
            }

            Console.WriteLine($"\n{type}");


            // Get fields and methods
            foreach (var field in type.GetFields())
            {
                Console.WriteLine($"Field: {field.Name}");
            }

            foreach (var method in type.GetMethods())
            {
                Console.WriteLine($"Method: {method.Name}");
            }

            Console.WriteLine();


            // Get and invoke Play() method of HellsBells class
            var playMethod = type.GetMethod("Play");

            playMethod.Invoke(Activator.CreateInstance(type), null);

        }
    }
}
