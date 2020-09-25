using LINQBasics.Entities;
using LINQBasics.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LINQBasics.Services
{
    public class StudentService
    {
        private StudentRepository _studentRepo;
        private const int MeritThreshold = 75;

        public StudentService(StudentRepository studentRepo) {
            _studentRepo = studentRepo;
        }

        public List<string> GetMeritStudentNames()
        {
            return _studentRepo.GetStudents()
                .Where(student => student.AcademicRecord.GetAverage() >= MeritThreshold)
                .Select(student => student.Name)
                .ToList();
        }

        public List<string> GetNonMeritStudentNames()
        {
            return _studentRepo.GetStudents()
                .Where(student => student.AcademicRecord.GetAverage() < MeritThreshold)
                .Select(student => student.Name)
                .ToList();
        }

        public List<Student> GetStudentsWithTotalMarksOver(int total)
        {
            return _studentRepo.GetStudents()
                .Where(student => student.AcademicRecord.GetTotalMarks() > total)
                .ToList();
        }

        public List<Student> GetStudentsWithMarkInEachSubjectOver(int mark)
        {
            return _studentRepo.GetStudents()
                .Where(student => student.AcademicRecord.Subjects.All(subject => subject.Mark > mark))
                .ToList();
        }
    }
}
