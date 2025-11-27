using STUDYBUDDY.Models;
using System.ComponentModel.DataAnnotations;

namespace STUDYBUDDY.Models
{
    public class Question
    {
        public int QuestionID { get; set; }

        [Required]
        public int QuizID { get; set; }

        [Required, MaxLength(500)]
        public string QuestionText { get; set; }

        [MaxLength(200)] public string OptionA { get; set; }
        [MaxLength(200)] public string OptionB { get; set; }
        [MaxLength(200)] public string OptionC { get; set; }
        [MaxLength(200)] public string OptionD { get; set; }

        [MaxLength(50)]
        public string CorrectAnswer { get; set; }

        public Quiz Quiz { get; set; }
    }
}
