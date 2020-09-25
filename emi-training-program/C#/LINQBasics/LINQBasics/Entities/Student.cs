using System;
using System.Collections.Generic;
using System.Text;

namespace LINQBasics.Entities
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public AcademicRecord AcademicRecord { get; set; }

        public Student() { }
    }
}
