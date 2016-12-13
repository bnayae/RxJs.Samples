using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.Tracing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleLogTest
{

    /// <summary>
    /// Fundamentals events
    /// </summary>
    /// <seealso cref="System.Diagnostics.Tracing.EventSource" />
    [EventSource(Name = "ClickDimensions-Fundamentals-Log")]
    internal sealed class BasicLog : EventSource, ILog
    {
        private const string PATH_KEY = "Component.FullName";

        /// <summary>
        /// Identifiers
        /// </summary>
        private enum Ids : ushort
        {
            Debug = 1,
            Info = Debug * 2,
            Warn = Info * 2,
            Error = Warn * 2,
            Critical = Error * 2,
        }

        #region Ctor

        public static readonly BasicLog Default = new BasicLog();

        /// <summary>
        /// Initializes the instance.
        /// </summary>
        static BasicLog()
        {
            // A workaround for the problem where ETW activities do not get tracked until Tasks infrastructure is initialized.
            // This problem will be fixed in .NET Framework 4.6.2.
            Task.Run(() => { }).Wait();
        }

        #endregion // Ctor

        #region Error

        /// <summary>
        /// Error.
        /// </summary>
        /// <param name="error">The error.</param>
        /// <param name="path"></param>        
        [Event((int)Ids.Error, Level = EventLevel.Error,
            Message = "Error: {0}, {1}")]
        public void Error(string path, string error)
        {
            if (this.IsEnabled())
            {
                WriteEvent((int)Ids.Error, path, error);
            }
        }

        #endregion // Error

        #region Warn

        /// <summary>
        /// Warn.
        /// </summary>
        /// <param name="error">The error.</param>
        /// <param name="path"></param>
        [Event((int)Ids.Warn, Level = EventLevel.Warning,
            Message = "Warn: {0}, {1}")]
        public void Warn(string path, string error)
        {
            if (this.IsEnabled())
            {
                WriteEvent((int)Ids.Warn, path, error);
            }
        }

        #endregion // Warn

        #region Info


        /// <summary>
        /// Log an Information.
        /// </summary>
        /// <param name="message">The message.</param>
        /// <param name="path"></param>
        [Event((int)Ids.Info, Level = EventLevel.Informational,
           Message = "Info: {0}, {1}")]
        public void Info(string path, string message)
        {
            if (this.IsEnabled())
            {
                WriteEvent((int)Ids.Info, path, message);
            }
        }

        #endregion // Info
    }
}
