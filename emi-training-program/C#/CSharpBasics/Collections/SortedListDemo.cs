using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Collections
{
    class SortedListDemo
    {
        private SortedList list;

        public SortedListDemo() {
            list = new SortedList();
        }

        public void Execute()
        {
            bool result;

            // Add items to list in any order
            list.Add("4", "is");
            list.Add("3", "C#");
            list.Add("1", "Programming");
            list.Add("2", "with");
            list.Add("5", "fun!");
            PrintList();

            // Count vs capacity
            Console.WriteLine($"Count: {list.Count}");
            Console.WriteLine($"Capacity: {list.Capacity}");

            list.TrimToSize();
            Console.WriteLine($"Capacity after TrimToSize(): {list.Capacity}");

            // Check if things exist in the list
            result = list.ContainsValue("fun!");
            Console.WriteLine($"Contains value \"fun!\"? {result}");

            result = list.ContainsKey("10");
            Console.WriteLine($"Contains key 10? {result}");

            // Get the index of a value
            int index = list.IndexOfValue("C#");
            Console.WriteLine($"Index of \"C#\" value: {index}");

            // Remove some items from the list
            list.RemoveAt(list.IndexOfValue("with"));
            list.RemoveAt(list.IndexOfValue("C#"));
            PrintList();

            // Clear the list
            list.Clear();
            Console.WriteLine($"Count after Clear(): {list.Count}");
        }

        private void PrintList()
        {
            for (int i = 0; i < list.Count; i++)
            {
                Console.WriteLine($"{list.GetKey(i)}. {list.GetByIndex(i)}");
            }
        }
    }
}
