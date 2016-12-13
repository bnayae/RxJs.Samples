using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleLogTest
{
    [JsonObject(MemberSerialization.OptIn)]
    public class LogMessage
    {
        public LogMessage(LogLevel level, string path, string message)
        {
            Level = level;
            Path = path;
            Message = message;
        }

        [JsonProperty]
        public readonly LogLevel Level;
        [JsonProperty]
        public readonly string Path;
        [JsonProperty]
        public readonly string Message;
    }


}
