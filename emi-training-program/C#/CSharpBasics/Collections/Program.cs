using System;
using System.Collections;
using System.Collections.Generic;

namespace Collections
{
    class Program
    {
        static void Main(string[] args)
        {
            string input;

            while (true)
            {
                PrintMenu();
                input = Console.ReadLine();

                Console.Clear();

                switch (input)
                {
                    case "1":
                        SortedListDemo sortedListDemo = new SortedListDemo();
                        sortedListDemo.Execute();
                        break;

                    case "2":
                        SortedDictionaryDemo sortedDictionaryDemo = new SortedDictionaryDemo();
                        sortedDictionaryDemo.Execute();
                        break;

                    case "3":
                        HashSetDemo hashSetDemo = new HashSetDemo();
                        hashSetDemo.Execute();
                        break;

                    default:
                        return;
                }
            }
        }

        public static void PrintMenu()
        {
            Console.WriteLine();
            Console.WriteLine("-------------------------");
            Console.WriteLine("Select a demo to execute:");
            Console.WriteLine("1. Sorted List");
            Console.WriteLine("2. Sorted Dictionary");
            Console.WriteLine("3. Hash Set");
            Console.WriteLine("-------------------------");
            Console.WriteLine();
        }
    }
}
