//js here
// Sample data for courses
const coursesData = [
    {
        title: "JavaScript Mastery",
        progress: 75,
        category: "In Progress"
    },
    {
        title: "UI/UX Design Fundamentals",
        progress: 100,
        category: "Completed"
    },
    {
        title: "Machine Learning Basics",
        progress: 45,
        category: "In Progress"
    },
    {
        title: "Mobile App Development",
        progress: 60,
        category: "In Progress"
    }
];

// Sample data for activities
const activitiesData = [
    {
        icon: "🎯",
        color: "#667eea",
        title: "Completed Quiz: JavaScript Arrays",
        time: "2 hours ago"
    },
    {
        icon: "📚",
        color: "#f093fb",
        title: "Started Course: React Advanced",
        time: "5 hours ago"
    },
    {
        icon: "🏆",
        color: "#43e97b",
        title: "Earned Badge: Quick Learner",
        time: "1 day ago"
    },
    {
        icon: "✅",
        color: "#4facfe",
        title: "Completed: CSS Grid Module",
        time: "2 days ago"
    },
    {
        icon: "💬",
        color: "#f6ad55",
        title: "New comment on your question",
        time: "3 days ago"
    }
];

// Sample data for quiz results
const quizData = [
    {
        name: "JavaScript Functions Quiz",
        course: "JavaScript Mastery",
        score: 92,
        date: "2024-11-25",
        status: "Passed"
    },
    {
        name: "HTML5 Semantic Elements",
        course: "Web Development",
        score: 88,
        date: "2024-11-23",
        status: "Passed"
    },
    {
        name: "CSS Flexbox Challenge",
        course: "UI/UX Design",
        score: 95,
        date: "2024-11-20",
        status: "Passed"
    },
    {
        name: "React Hooks Assessment",
        course: "React Advanced",
        score: 78,
        date: "2024-11-18",
        status: "Passed"
    },
    {
        name: "Python Basics Test",
        course: "Python Programming",
        score: 65,
        date: "2024-11-15",
        status: "Passed"
    },
    {
        name: "Database Design Quiz",
        course: "SQL Fundamentals",
        score: 58,
        date: "2024-11-12",
        status: "Failed"
    }
];

// Function to render courses
function renderCourses() {
    const coursesList = document.getElementById('coursesList');

    coursesList.innerHTML = coursesData.map(course => `
        <div class="course-item">
            <div class="course-header">
                <h3 class="course-title">${course.title}</h3>
                <span class="course-badge">${course.category}</span>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${course.progress}%"></div>
            </div>
            <p class="progress-text">${course.progress}% Complete</p>
        </div>
    `).join('');
}

// Function to render activities
function renderActivities() {
    const activityList = document.getElementById('activityList');

    activityList.innerHTML = activitiesData.map(activity => `
        <div class="activity-item">
            <div class="activity-icon" style="background: ${activity.color}20; color: ${activity.color};">
                ${activity.icon}
            </div>
            <div class="activity-content">
                <h4>${activity.title}</h4>
                <p class="activity-time">${activity.time}</p>
            </div>
        </div>
    `).join('');
}

// Function to get score class
function getScoreClass(score) {
    if (score >= 90) return 'score-excellent';
    if (score >= 75) return 'score-good';
    if (score >= 60) return 'score-average';
    return 'score-poor';
}

// Function to render quiz results
function renderQuizzes() {
    const quizTableBody = document.getElementById('quizTableBody');

    quizTableBody.innerHTML = quizData.map(quiz => `
        <tr>
            <td>${quiz.name}</td>
            <td>${quiz.course}</td>
            <td>
                <span class="quiz-score ${getScoreClass(quiz.score)}">${quiz.score}%</span>
            </td>
            <td>${formatDate(quiz.date)}</td>
            <td>
                <span class="status-badge ${quiz.status === 'Passed' ? 'status-passed' : 'status-failed'}">
                    ${quiz.status}
                </span>
            </td>
            <td>
                <button class="btn-view" onclick="viewQuizDetails('${quiz.name}')">View</button>
            </td>
        </tr>
    `).join('');
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to view quiz details
function viewQuizDetails(quizName) {
    alert(`Viewing details for: ${quizName}`);
    // Add your logic here to show quiz details
}

// Function to update stats with animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const numericValue = parseInt(finalValue);

        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    stat.textContent = isPercentage ? `${numericValue}%` : numericValue;
                    clearInterval(timer);
                } else {
                    stat.textContent = isPercentage ? `${Math.floor(currentValue)}%` : Math.floor(currentValue);
                }
            }, 20);
        }
    });
}

// Function to animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function () {
    renderCourses();
    renderActivities();
    renderQuizzes();

    // Animate stats and progress bars after a short delay
    setTimeout(() => {
        animateStats();
        animateProgressBars();
    }, 200);
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});