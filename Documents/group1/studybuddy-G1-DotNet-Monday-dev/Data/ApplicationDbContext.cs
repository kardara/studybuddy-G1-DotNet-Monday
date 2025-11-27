using Microsoft.EntityFrameworkCore;
using STUDYBUDDY.Models;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace StudyBuddy.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Result> Results { get; set; }
        public DbSet<Certificate> Certificates { get; set; }
        public DbSet<ChatLog> ChatLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Example: unique index on Email
            builder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // Configure relationships (optional - EF will infer many)
            builder.Entity<Course>()
                .HasMany(c => c.Quizzes)
                .WithOne(q => q.Course)
                .HasForeignKey(q => q.CourseID)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Quiz>()
                .HasMany(q => q.Questions)
                .WithOne(qn => qn.Quiz)
                .HasForeignKey(qn => qn.QuizID)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<User>()
                .HasMany(u => u.Results)
                .WithOne(r => r.User)
                .HasForeignKey(r => r.UserID)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Quiz>()
                .HasMany(q => q.Results)
                .WithOne(r => r.Quiz)
                .HasForeignKey(r => r.QuizID)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<User>()
                .HasMany(u => u.Certificates)
                .WithOne(c => c.User)
                .HasForeignKey(c => c.UserID)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Course>()
                .HasMany(c => c.Certificates)
                .WithOne(cert => cert.Course)
                .HasForeignKey(cert => cert.CourseID)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<User>()
                .HasMany(u => u.ChatLogs)
                .WithOne(cl => cl.User)
                .HasForeignKey(cl => cl.UserID)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
