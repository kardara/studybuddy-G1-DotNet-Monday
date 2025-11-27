using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace STUDYBUDDY.Models
{
    public class User
    {
        public int UserID { get; set; }

        [Required, MaxLength(100)]
        public string FullName { get; set; }

        [Required, MaxLength(100), EmailAddress]
        public string Email { get; set; }

        [Required, MaxLength(100)]
        public string Password { get; set; }

        [Required, MaxLength(50)]
        public string Role { get; set; } // e.g., "Student", "Admin"

        // Navigation properties
        public ICollection<Result> Results { get; set; }
        public ICollection<Certificate> Certificates { get; set; }
        public ICollection<ChatLog> ChatLogs { get; set; }
    }
}
