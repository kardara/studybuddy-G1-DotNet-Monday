using STUDYBUDDY.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace STUDYBUDDY.Models
{
    public class Quiz
    {
        public int QuizID { get; set; }

        [Required]
        public int CourseID { get; set; }

        [Required, MaxLength(200)]
        public string Title { get; set; }

        public int PassingScore { get; set; }

        // Navigation
        public Course Course { get; set; }
        public ICollection<Question> Questions { get; set; }
        public ICollection<Result> Results { get; set; }
    }
}
