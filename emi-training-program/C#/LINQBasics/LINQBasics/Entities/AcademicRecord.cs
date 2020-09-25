using System;
using System.Collections.Generic;
using System.Text;

namespace LINQBasics.Entities
{
    public class AcademicRecord
    {
        public List<Subject> Subjects { get; set; }

        public AcademicRecord() { }

        public int GetTotalMarks()
        {
            var total = 0;

            foreach (var subject in Subjects)
            {
                total += subject.Mark;
            }

            return total;
        }

        public int GetAverage()
        {
            return GetTotalMarks() / Subjects.Count;
        }
    }
}
