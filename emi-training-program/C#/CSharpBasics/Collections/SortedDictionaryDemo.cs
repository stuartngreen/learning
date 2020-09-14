using System;
using System.Collections.Generic;
using System.Text;

namespace Collections
{
    class SortedDictionaryDemo
    {
        private SortedDictionary<string, string> currencies;

        public SortedDictionaryDemo()
        {
            currencies = new SortedDictionary<string, string>();
        }

        public void Execute()
        {
            bool result;

            currencies.Add("USD", "United States Dollar");
            currencies.Add("AUD", "Australian Dollar");
            currencies.Add("ZAR", "South African Rand");
            currencies.Add("CAD", "Canadian Dollar");
            currencies.Add("GBP", "Great Britain Pound");
            currencies.Add("EUR", "Euro");
            currencies.Add("SGD", "Singapore Dollar");
            PrintList();

            // Number of items in dictionary
            Console.WriteLine($"Count: {currencies.Count}");

            // Check if things exist in the dictionary
            result = currencies.ContainsKey("USD");
            Console.WriteLine($"Contains key \"USD\"? {result}");
            result = currencies.ContainsValue("Singapore Dollar");
            Console.WriteLine($"Contains value \"Singapore Dollar\"? {result}");
            Console.WriteLine();

            // Change value
            currencies["GBP"] = "Pound Sterling";

            // Removing item from dictionary
            currencies.Remove("USD");
            Console.WriteLine("After changing value and removing \"USD\":");
            PrintList();
            result = currencies.ContainsKey("USD");
            Console.WriteLine($"Contains key \"USD\"? {result}");
            Console.WriteLine();

            // Clear dictionary
            currencies.Clear();
            Console.WriteLine("After clearing dictionary:");
            Console.WriteLine($"Count: {currencies.Count}");
        }

        private void PrintList()
        {
            foreach (string key in currencies.Keys)
            {
                Console.WriteLine($"{key} - {currencies[key]}");
            }
        }

    }
}
