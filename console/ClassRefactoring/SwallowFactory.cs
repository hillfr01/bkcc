using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeveloperSample.ClassRefactoring
{
    public static class SwallowFactory
    {
        public static SwallowEuropean CreateSwallowEuropean()
        {
            return new SwallowEuropean();
        }

        public static SwallowAfrican CreateSwallowAfrican()
        {
            return new SwallowAfrican();
        }
    }
}
