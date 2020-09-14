using System;
using System.Collections.Generic;
using System.Text;

namespace PrivateConstructor
{
    class MyClass
    {
        private string myString = "Default string value.";

        private MyClass()
        {
            Console.WriteLine("Default private constructor called.");
            Console.WriteLine(GetMyString());
        }

        public MyClass(string myString1, string myString2)
        {
            myString = $"{ myString1 } { myString2 }";
            Console.WriteLine("Public constructor called.");
            Console.WriteLine(GetMyString());
        }

        private MyClass(string myString)
        {
            this.myString = myString;
            Console.WriteLine("Second private constructor called.");
            Console.WriteLine(GetMyString());
        }

        public string GetMyString()
        {
            return myString;
        }

        public static MyClass GetObjectUsingDefaultPrivateConstructor()
        {
            return new MyClass();
        }

        public static MyClass GetObjectUsingSecondPrivateConstructor(string myString)
        {
            return new MyClass(myString);
        }
    }
}
