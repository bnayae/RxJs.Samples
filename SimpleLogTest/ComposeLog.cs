using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleLogTest
{
    internal class ComposeLog : ILog
    {
        List<ILog> loggers;

        public ComposeLog(List<ILog> loggers)
        {
            this.loggers = loggers;
        }

        public void Error(string path, string error)
        {
            loggers.ForEach(l => l.Error(path, error));
        }

        public void Info(string path, string message)
        {
            loggers.ForEach(l => l.Info(path, message));
        }

        public void Warn(string path, string error)
        {
            loggers.ForEach(l => l.Warn(path, error));
        }
    }
}
