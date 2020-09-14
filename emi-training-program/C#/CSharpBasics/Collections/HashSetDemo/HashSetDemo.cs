using System;
using System.Collections.Generic;
using System.Text;

namespace Collections
{
    class HashSetDemo
    {
        private HashSet<Student> studentSet1 = new HashSet<Student>();
        private HashSet<Student> studentSet2 = new HashSet<Student>();

        public HashSetDemo() { }

        public void PrintSet(HashSet<Student> set)
        {
            foreach (var student in set)
            {
                Console.WriteLine(student.GetStudentDetails());
            }
        }

        public void Execute()
        {
            // Create some students and sets
            studentSet1.Add(new Student(1, "Stuart", 40));
            studentSet1.Add(new Student(2, "Rasa", 30));
            studentSet1.Add(new Student(3, "Vieslav", 25));
            studentSet2.Add(new Student(1, "Stuart", 40));
            studentSet2.Add(new Student(4, "Modestas", 20));

            // Print set #1
            Console.WriteLine("Student Set #1:");
            PrintSet(studentSet1);
            Console.WriteLine();

            // Try to add duplicates to set #1
            studentSet1.Add(new Student(1, "Stuart", 40));
            studentSet1.Add(new Student(1, "Stuart", 40));
            Console.WriteLine("Student Set #1 after trying to add duplicates:");
            PrintSet(studentSet1);
            Console.WriteLine();

            // Check if set contains item
            Console.WriteLine($"Set contains \"Stuart\"? {studentSet1.Contains(new Student(1, "Stuart", 40))}"); // returns True
            Console.WriteLine();

            // Removing matching items from another set
            Console.WriteLine("Student Set #1 after removing Set #2 items:");
            studentSet1.ExceptWith(studentSet2);
            PrintSet(studentSet1);
            Console.WriteLine();

            // Keep only items found in both sets
            Console.WriteLine("Student Set #1 after intersection with Set #2:");
            studentSet1.Add(new Student(1, "Stuart", 40));
            studentSet2.Add(new Student(2, "Rasa", 30));
            studentSet1.IntersectWith(studentSet2);
            PrintSet(studentSet1);
            Console.WriteLine();

            // Check if all items in a set are within another set
            Console.WriteLine($"All items in Set #1 within Set #2? {studentSet1.IsSubsetOf(studentSet2)}");
            Console.WriteLine();

            // Join two sets (unique values)
            Console.WriteLine("Student Set #1 after union with Set #2:");
            studentSet1.UnionWith(studentSet2);
            PrintSet(studentSet1);
        }
    }
}
