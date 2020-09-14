using System;
using System.Collections.Generic;
using System.Text;

namespace Collections
{
    public class Student : IEquatable<Student>
    {
        private int id;
        private string name;
        private int age;

        public Student() { }

        public Student(int id, string name, int age)
        {
            this.id = id;
            this.name = name;
            this.age = age;
        }

        public string GetStudentDetails()
        {
            return $"id: {id}, name: {name}, age: {age}";
        }

        public bool Equals(Student otherStudent)
        {
            return otherStudent != null && otherStudent.id == this.id;
        }
        public override int GetHashCode()
        {
            return id.GetHashCode();
        }
    }
}
