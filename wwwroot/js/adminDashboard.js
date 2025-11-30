//js here

// Sample data for students
const studentsData = [
    { id: 1, name: "John Doe", email: "john.doe@email.com", courses: 5, quizzes: 18, avgScore: 88, status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@email.com", courses: 7, quizzes: 24, avgScore: 92, status: "Active" },
    { id: 3, name: "Mike Johnson", email: "mike.j@email.com", courses: 3, quizzes: 12, avgScore: 75, status: "Active" },
    { id: 4, name: "Sarah Williams", email: "sarah.w@email.com", courses: 6, quizzes: 20, avgScore: 85, status: "Active" },
    { id: 5, name: "David Brown", email: "david.b@email.com", courses: 4, quizzes: 15, avgScore: 78, status: "Active" },
    { id: 6, name: "Emily Davis", email: "emily.d@email.com", courses: 8, quizzes: 28, avgScore: 95, status: "Active" },
    { id: 7, name: "Robert Wilson", email: "robert.w@email.com", courses: 2, quizzes: 8, avgScore: 68, status: "Inactive" },
    { id: 8, name: "Lisa Anderson", email: "lisa.a@email.com", courses: 5, quizzes: 19, avgScore: 82, status: "Active" }
];

// Sample data for courses
const coursesData = [
    { id: 1, name: "JavaScript Mastery", category: "Programming", students: 245, duration: "8 weeks", status: "Active" },
    { id: 2, name: "UI/UX Design Fundamentals", category: "Design", students: 189, duration: "6 weeks", status: "Active" },
    { id: 3, name: "Data Analytics & Visualization", category: "Business", students: 312, duration: "10 weeks", status: "Active" },
    { id: 4, name: "Machine Learning Basics", category: "Programming", students: 178, duration: "12 weeks", status: "Active" },
    { id: 5, name: "Mobile App Development", category: "Programming", students: 223, duration: "9 weeks", status: "Active" },
    { id: 6, name: "Digital Marketing Mastery", category: "Business", students: 267, duration: "7 weeks", status: "Active" },
    { id: 7, name: "Python for Beginners", category: "Programming", students: 156, duration: "6 weeks", status: "Inactive" }
];

// Sample data for quizzes
const quizzesData = [
    { id: 1, name: "JavaScript Functions Quiz", course: "JavaScript Mastery", questions: 15, timesTaken: 245, avgScore: 85, status: "Active" },
    { id: 2, name: "HTML5 & CSS3 Basics", course: "Web Development", questions: 20, timesTaken: 198, avgScore: 82, status: "Active" },
    { id: 3, name: "Design Principles Test", course: "UI/UX Design", questions: 12, timesTaken: 167, avgScore: 88, status: "Active" },
    { id: 4, name: "React Hooks Assessment", course: "JavaScript Mastery", questions: 18, timesTaken: 134, avgScore: 79, status: "Active" },
    { id: 5, name: "Data Visualization Challenge", course: "Data Analytics", questions: 10, timesTaken: 201, avgScore: 86, status: "Active" },
    { id: 6, name: "Machine Learning Algorithms", course: "ML Basics", questions: 25, timesTaken: 89, avgScore: 76, status: "Active" },
    { id: 7, name: "SQL Fundamentals", course: "Database Design", questions: 15, timesTaken: 156, avgScore: 81, status: "Inactive" }
];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function () {
    renderStudents();
    renderCourses();
    renderQuizzes();
    updateStats();
    setupSearchFilters();

    // Animate stats after a short delay
    setTimeout(() => {
        animateStats();
    }, 200);
});

// Render students table
function renderStudents() {
    const tbody = document.getElementById('studentsTableBody');
    tbody.innerHTML = studentsData.map(student => `
        <tr>
            <td>#${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.courses}</td>
            <td>${student.quizzes}</td>
            <td><strong>${student.avgScore}%</strong></td>
            <td><span class="status-badge status-${student.status.toLowerCase()}">${student.status}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-view" onclick="viewStudent(${student.id})">View</button>
                    <button class="btn-edit" onclick="editStudent(${student.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Render courses table
function renderCourses() {
    const tbody = document.getElementById('coursesTableBody');
    tbody.innerHTML = coursesData.map(course => `
        <tr>
            <td>#${course.id}</td>
            <td>${course.name}</td>
            <td>${course.category}</td>
            <td>${course.students}</td>
            <td>${course.duration}</td>
            <td><span class="status-badge status-${course.status.toLowerCase()}">${course.status}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-view" onclick="viewCourse(${course.id})">View</button>
                    <button class="btn-edit" onclick="editCourse(${course.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteCourse(${course.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Render quizzes table
function renderQuizzes() {
    const tbody = document.getElementById('quizzesTableBody');
    tbody.innerHTML = quizzesData.map(quiz => `
        <tr>
            <td>#${quiz.id}</td>
            <td>${quiz.name}</td>
            <td>${quiz.course}</td>
            <td>${quiz.questions}</td>
            <td>${quiz.timesTaken}</td>
            <td><strong>${quiz.avgScore}%</strong></td>
            <td><span class="status-badge status-${quiz.status.toLowerCase()}">${quiz.status}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-view" onclick="viewQuiz(${quiz.id})">View</button>
                    <button class="btn-edit" onclick="editQuiz(${quiz.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteQuiz(${quiz.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Update stats
function updateStats() {
    document.getElementById('totalStudents').textContent = studentsData.length;
    document.getElementById('totalCourses').textContent = coursesData.length;
    document.getElementById('totalQuizzes').textContent = quizzesData.length;

    const totalQuizzesTaken = studentsData.reduce((sum, student) => sum + student.quizzes, 0);
    document.getElementById('quizzesTaken').textContent = totalQuizzesTaken;
}

// Animate statistics counters
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = Math.ceil(finalValue / 50);

        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = finalValue;
                clearInterval(timer);
            } else {
                stat.textContent = currentValue;
            }
        }, 20);
    });
}

// Setup search filters
function setupSearchFilters() {
    document.getElementById('studentSearch').addEventListener('input', function (e) {
        filterTable('studentsTableBody', e.target.value, [1, 2]); // Search in name and email columns
    });

    document.getElementById('courseSearch').addEventListener('input', function (e) {
        filterTable('coursesTableBody', e.target.value, [1, 2]); // Search in name and category columns
    });

    document.getElementById('quizSearch').addEventListener('input', function (e) {
        filterTable('quizzesTableBody', e.target.value, [1, 2]); // Search in name and course columns
    });
}

// Filter table function
function filterTable(tbodyId, searchTerm, columnIndices) {
    const tbody = document.getElementById(tbodyId);
    const rows = tbody.getElementsByTagName('tr');
    const search = searchTerm.toLowerCase();

    Array.from(rows).forEach(row => {
        const cells = row.getElementsByTagName('td');
        let found = false;

        columnIndices.forEach(index => {
            if (cells[index] && cells[index].textContent.toLowerCase().includes(search)) {
                found = true;
            }
        });

        row.style.display = found ? '' : 'none';
    });
}

// Modal functions
function openAddCourseModal() {
    document.getElementById('addCourseModal').classList.add('active');
}

function closeAddCourseModal() {
    document.getElementById('addCourseModal').classList.remove('active');
    document.getElementById('addCourseForm').reset();
}

function openAddQuizModal() {
    document.getElementById('addQuizModal').classList.add('active');
}

function closeAddQuizModal() {
    document.getElementById('addQuizModal').classList.remove('active');
    document.getElementById('addQuizForm').reset();
}

// Close modal when clicking outside
window.onclick = function (event) {
    const courseModal = document.getElementById('addCourseModal');
    const quizModal = document.getElementById('addQuizModal');

    if (event.target === courseModal) {
        closeAddCourseModal();
    }
    if (event.target === quizModal) {
        closeAddQuizModal();
    }
}

// Form submissions
document.getElementById('addCourseForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const courseData = Object.fromEntries(formData);

    console.log('New course data:', courseData);
    alert('Course created successfully!');

    // Add to coursesData array
    const newCourse = {
        id: coursesData.length + 1,
        name: courseData.courseName,
        category: courseData.category,
        students: 0,
        duration: courseData.duration + ' weeks',
        status: courseData.status
    };
    coursesData.push(newCourse);

    renderCourses();
    updateStats();
    closeAddCourseModal();
});

document.getElementById('addQuizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const quizData = Object.fromEntries(formData);

    console.log('New quiz data:', quizData);
    alert('Quiz created successfully!');

    // Add to quizzesData array
    const newQuiz = {
        id: quizzesData.length + 1,
        name: quizData.quizName,
        course: quizData.course,
        questions: parseInt(quizData.questions),
        timesTaken: 0,
        avgScore: 0,
        status: quizData.status
    };
    quizzesData.push(newQuiz);

    renderQuizzes();
    updateStats();
    closeAddQuizModal();
});

// Action functions for students
function viewStudent(id) {
    const student = studentsData.find(s => s.id === id);
    alert(`Viewing student: ${student.name}\nEmail: ${student.email}\nCourses: ${student.courses}\nAvg Score: ${student.avgScore}%`);
}

function editStudent(id) {
    const student = studentsData.find(s => s.id === id);
    alert(`Edit student: ${student.name}`);
    // Add edit logic here
}

function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        const index = studentsData.findIndex(s => s.id === id);
        studentsData.splice(index, 1);
        renderStudents();
        updateStats();
        alert('Student deleted successfully!');
    }
}

// Action functions for courses
function viewCourse(id) {
    const course = coursesData.find(c => c.id === id);
    alert(`Viewing course: ${course.name}\nCategory: ${course.category}\nStudents: ${course.students}`);
}

function editCourse(id) {
    const course = coursesData.find(c => c.id === id);
    alert(`Edit course: ${course.name}`);
    // Add edit logic here
}

function deleteCourse(id) {
    if (confirm('Are you sure you want to delete this course?')) {
        const index = coursesData.findIndex(c => c.id === id);
        coursesData.splice(index, 1);
        renderCourses();
        updateStats();
        alert('Course deleted successfully!');
    }
}

// Action functions for quizzes
function viewQuiz(id) {
    const quiz = quizzesData.find(q => q.id === id);
    alert(`Viewing quiz: ${quiz.name}\nCourse: ${quiz.course}\nQuestions: ${quiz.questions}`);
}

function editQuiz(id) {
    const quiz = quizzesData.find(q => q.id === id);
    alert(`Edit quiz: ${quiz.name}`);
    // Add edit logic here
}

function deleteQuiz(id) {
    if (confirm('Are you sure you want to delete this quiz?')) {
        const index = quizzesData.findIndex(q => q.id === id);
        quizzesData.splice(index, 1);
        renderQuizzes();
        updateStats();
        alert('Quiz deleted successfully!');
    }
}

// Refresh functions
function refreshStudents() {
    renderStudents();
    alert('Students data refreshed!');
}

function refreshCourses() {
    renderCourses();
    alert('Courses data refreshed!');
}

function refreshQuizzes() {
    renderQuizzes();
    alert('Quizzes data refreshed!');
}