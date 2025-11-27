using STUDYBUDDY.Models;
using System;

namespace STUDYBUDDY.Models
{
    public class Result
    {
        public int ResultID { get; set; }

        public int UserID { get; set; }
        public int QuizID { get; set; }

        public int Score { get; set; }
        public DateTime CompletedAt { get; set; }

        public User User { get; set; }
        public Quiz Quiz { get; set; }
    }
}
