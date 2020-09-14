using System;
using System.Collections.Generic;
using System.Text;

namespace ClassHierarchy
{
    interface IAnimal
    {
        string Family { get; set; }

        string CommonName { get; set; }

        void Sound();

        void Eat();

        void PrintDetails();
    }
}
