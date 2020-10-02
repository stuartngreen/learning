using System;
using System.Collections.Generic;
using System.Text;

namespace LiskovSubstitution
{

    // We have this abstract class because not all birds can fly.

    public abstract class FlyingBird : Bird
    {
        public FlyingBird(string name) : base(name)
        {
        }

        public abstract void Fly();
    }
}
