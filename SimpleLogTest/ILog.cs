namespace SimpleLogTest
{
    internal interface ILog
    {
        void Error(string path, string error);
        void Info(string path, string message);
        void Warn(string path, string error);
    }
}