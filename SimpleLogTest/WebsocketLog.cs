using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebSocketSharp;
using WebSocketSharp.Server;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace SimpleLogTest
{
    internal class WebsocketLog : WebSocketBehavior, ILog
    {
        private WebSocketServer _websocket;
        private List<WebsocketLog> _registrations = new List<WebsocketLog>();
        private static JsonSerializerSettings _setting;

        static WebsocketLog()
        {
            _setting = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            _setting.Converters.Add(new StringEnumConverter());
        }

        private WebsocketLog(bool isWebSocket)
        {
            _websocket = new WebSocketServer(4567);
            _websocket.AddWebSocketService<WebsocketLog>("/Log");
            _websocket.Start();
        }

        public WebsocketLog()
        {
            Default.Register(this);
        }

        private void Register(WebsocketLog websocketLog)
        {
            _registrations.Add(websocketLog);
        }

        private void UnRegister(WebsocketLog websocketLog)
        {
            _registrations.Remove(websocketLog);
        }

        public static readonly WebsocketLog Default = new WebsocketLog(true);

        public void Error(string path, string error)
        {
            var log = new LogMessage(LogLevel.Error, path, error);
            Send(log);
        }

        public void Info(string path, string message)
        {
            var log = new LogMessage(LogLevel.Info, path, message);
            Send(log);
        }

        public void Warn(string path, string error)
        {
            var log = new LogMessage(LogLevel.Warn, path, error);
            Send(log);
        }

        private void Send(LogMessage message)
        {
            string json = JsonConvert.SerializeObject(message, _setting);
            _registrations.ForEach(ws => ws.Send(json));
        }
        protected override void OnClose(CloseEventArgs e)
        {
            Default.UnRegister(this);
        }
    }
}
