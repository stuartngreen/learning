using System;

namespace PrivateConstructor
{
    class Program
    {
        static void Main(string[] args)
        {
            // Default private constructor used via public method.
            MyClass myClass1 = MyClass.GetObjectUsingDefaultPrivateConstructor();

            // Public constructor used directly.
            MyClass myClass2 = new MyClass("String 1,", "String 2");

            // Second private constructor used via public method.
            MyClass myClass3 = MyClass.GetObjectUsingSecondPrivateConstructor("String 3");

        }
    }
}
