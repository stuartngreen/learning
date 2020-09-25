using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace LINQBasics.Entities
{
    class StudentListXmlWriter
    {
        private List<Student> _list;
        private XElement _xml;

        public StudentListXmlWriter(List<Student> list)
        {
            _list = list;
            _xml = CreateXml();
        }

        private XElement CreateXml()
        {
            return new XElement("StudentList", _list.Select(student =>
                new XElement("Student",
                    new XElement("Id", student.Id),
                    new XElement("Name", student.Name),
                    new XElement("AcademicRecord",
                        new XElement("Subjects", student.AcademicRecord.Subjects.Select(subject =>
                            new XElement("Subject",
                                new XElement("Name", subject.Name),
                                new XElement("Mark", subject.Mark)
                            )
                        ),
                        new XElement("Average", student.AcademicRecord.GetAverage()))
                    )
                )
            ));
        }

        public void PrintXml()
        {
            Console.WriteLine(_xml);
        }
    }
}
