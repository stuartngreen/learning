using System;

namespace OpenClosed
{
    class Program
    {
        static void Main(string[] args)
        {
            ContractPFCalculation PF = new ContractPFCalculation();
            var amount = PF.CalculatePF(4000);
            Console.WriteLine(amount);
        }
    }
}
