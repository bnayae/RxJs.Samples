using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace SimpleLogTest
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] errors =
                {
                "Very bad thing happens",
                "Shouldn't happens",
                "It crush again",
                "That's bad",
                "Stay at work on Thursday"
                };
            string[] warns =
                {
                "Not expected",
                "I may ignore this",
                "Can be fix on Sunday",
                "Somebody else problem"
                };
            string[] infos =
                {
                "Stage 1 completed",
                "Component loaded",
                "Application starts",
                "Remember to buy some milk",
                "Save succeed",
                "Loading data",
                "Establish connection"
                };
            //Console.ReadLine();

            var logger = new ComposeLog(new List<ILog> { BasicLog.Default, WebsocketLog.Default });
            var rnd = new Random();
            while (true)
            {
                int i = rnd.Next(400, 2000);
                Thread.Sleep(i);
                if (i % 8 == 0)
                {
                    logger.Error("A.B.C", errors[i % errors.Length]);
                }
                else if (i % 5 == 0)
                {
                    logger.Warn("A.B.C", warns[i % warns.Length]);
                }
                else
                {
                    logger.Info("A.B.C", infos[i % infos.Length]);
                }

            }

            Console.ReadKey();
        }
    }
}
