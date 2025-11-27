using STUDYBUDDY.Models;
using System;

namespace STUDYBUDDY.Models
{
    public class ChatLog
    {
        public int ChatID { get; set; }
        public int UserID { get; set; }

        public string Message { get; set; }
        public DateTime Timestamp { get; set; }

        public User User { get; set; }
    }
}
