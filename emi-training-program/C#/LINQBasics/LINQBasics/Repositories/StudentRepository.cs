using LINQBasics.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace LINQBasics.Repositories
{
    public class StudentRepository
    {
        private List<Student> _studentData;

        public StudentRepository() {
            _studentData = new List<Student>() { };

            _studentData.Add(new Student()
            {
                Id = 101,
                Name = "Preety",
                AcademicRecord = new AcademicRecord()
                {
                    Subjects = new List<Subject>()
                    {
                        new Subject() { Name = "Mathematics", Mark = 75 },
                        new Subject() { Name = "Science", Mark = 88 },
                        new Subject() { Name = "English", Mark = 95 },
                        new Subject() { Name = "Biology", Mark = 65 }
                    }
                }
            });

            _studentData.Add(new Student()
            {
                Id = 102,
                Name = "Sambit",
                AcademicRecord = new AcademicRecord()
                {
                    Subjects = new List<Subject>()
                    {
                        new Subject() { Name = "Mathematics", Mark = 90 },
                        new Subject() { Name = "Science", Mark = 95 },
                        new Subject() { Name = "English", Mark = 81 },
                        new Subject() { Name = "Biology", Mark = 81 }
                    }
                }
            });

            _studentData.Add(new Student()
            {
                Id = 103,
                Name = "Anurag",
                AcademicRecord = new AcademicRecord()
                {
                    Subjects = new List<Subject>()
                    {
                        new Subject() { Name = "Mathematics", Mark = 60 },
                        new Subject() { Name = "Science", Mark = 75 },
                        new Subject() { Name = "English", Mark = 50 },
                        new Subject() { Name = "Biology", Mark = 50 }
                    }
                }
            });

            _studentData.Add(new Student()
            {
                Id = 104,
                Name = "Pranaya",
                AcademicRecord = new AcademicRecord()
                {
                    Subjects = new List<Subject>()
                    {
                        new Subject() { Name = "Mathematics", Mark = 65 },
                        new Subject() { Name = "Science", Mark = 65 },
                        new Subject() { Name = "English", Mark = 60 },
                        new Subject() { Name = "Biology", Mark = 50 }
                    }
                }
            });
        }

        public List<Student> GetStudents()
        {
            return _studentData;
        }
    }
}
