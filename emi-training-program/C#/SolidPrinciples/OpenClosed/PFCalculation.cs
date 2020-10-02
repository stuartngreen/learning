using System;
using System.Collections.Generic;
using System.Text;

namespace OpenClosed
{
    public abstract class PFCalculation
    {
        public abstract double CalculatePF(double salary);
        public double totalPF = 0;
    }

    public class PermanentPFCalculation : PFCalculation
    {
        public override double CalculatePF(double salary)
        {
            totalPF = salary * 0.8;
            return totalPF;
        }
    }

    public class ProbationPFCalculation : PFCalculation
    {
        public override double CalculatePF(double salary)
        {
            throw new NotImplementedException();
        }
    }

    public class ContractPFCalculation : PFCalculation
    {
        public override double CalculatePF(double salary)
        {
            totalPF = salary * 0.3;
            return totalPF;
        }
    }
}
