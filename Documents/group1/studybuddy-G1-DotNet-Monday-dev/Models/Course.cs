using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace STUDYBUDDY.Models
{
    public class Course
    {
        public int CourseID { get; set; }

        [Required, MaxLength(100)]
        public string Title { get; set; }

        [MaxLength(500)]
        public string Description { get; set; }

        public ICollection<Quiz> Quizzes { get; set; }
        public ICollection<Certificate> Certificates { get; set; }
    }
}

