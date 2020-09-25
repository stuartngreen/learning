using LINQBasics.Entities;
using LINQBasics.Repositories;
using LINQBasics.Services;
using System;
using System.Collections.Generic;

namespace LINQBasics
{
    class Program
    {
        static void Main(string[] args)
        {
            StudentRepository studentRepo = new StudentRepository();

            StudentService studentService = new StudentService(studentRepo);


            // Merit student names
            List<string> meritStudents = studentService.GetMeritStudentNames();

            Console.WriteLine("Merit students whose average mark is equal to or above 75:");
            foreach (var name in meritStudents)
            {
                Console.WriteLine(name);
            }
            Console.WriteLine();


            // Non-merit student names
            List<string> nonMeritStudents = studentService.GetNonMeritStudentNames();

            Console.WriteLine("Non-merit students whose average mark is below 75:");
            foreach (var name in nonMeritStudents)
            {
                Console.WriteLine(name);
            }
            Console.WriteLine();


            // Students with total marks over 265
            var totalMarks = 265;

            List<Student> studentsWithHighTotal = studentService.GetStudentsWithTotalMarksOver(totalMarks);

            Console.WriteLine($"Students with total marks over {totalMarks}:");
            foreach (var student in studentsWithHighTotal)
            {
                Console.WriteLine($"{student.Name} scored {student.AcademicRecord.GetTotalMarks()}.");
            }
            Console.WriteLine();


            // Students with marks in all subjects over 80
            var mark = 80;

            List<Student> studentsWithHighMarks = studentService.GetStudentsWithMarkInEachSubjectOver(mark);

            Console.WriteLine($"Students with marks in all subjects over {mark}:");
            foreach (var student in studentsWithHighMarks)
            {
                Console.WriteLine($"{student.Name} scored over {mark} in all subjects:");
                foreach (var subject in student.AcademicRecord.Subjects)
                {
                    Console.WriteLine($"{subject.Name}: {subject.Mark}");
                }
                Console.WriteLine();
            }


            // Print XML for the merit student list
            var xmlWriter = new StudentListXmlWriter(studentRepo.GetStudents());

            Console.WriteLine("XML output:");

            xmlWriter.PrintXml();
        }
    }
}
