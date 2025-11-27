using STUDYBUDDY.Models;
using System;

namespace STUDYBUDDY.Models
{
    public class Certificate
    {
        public int CertificateID { get; set; }
        public int UserID { get; set; }
        public int CourseID { get; set; }

        public string CertificateCode { get; set; }
        public DateTime IssuedAt { get; set; }

        public User User { get; set; }
        public Course Course { get; set; }
    }
}
