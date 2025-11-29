// JavaScript source code

let quizzes = [
    {
        id: 1,
        title: "JavaScript Fundamentals",
        description: "Test your knowledge of JavaScript basics including variables, functions, and data types.",
        questions: 15,
        duration: 30,
        status: "active"
    },
    {
        id: 2,
        title: "HTML & CSS Essentials",
        description: "Master the basics of web design with HTML structure and CSS styling.",
        questions: 20,
        duration: 45,
        status: "active"
    },
    {
        id: 3,
        title: "React Advanced Patterns",
        description: "Dive deep into React hooks, context, and advanced component patterns.",
        questions: 12,
        duration: 40,
        status: "draft"
    }
];

let editingId = null;

function renderQuizzes() {
    const container = document.getElementById('quizContainer');
    const emptyState = document.getElementById('emptyState');

    if (quizzes.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    container.innerHTML = quizzes.map(quiz => `
                <div class="quiz-card">
                    <span class="quiz-status status-${quiz.status}">${quiz.status.toUpperCase()}</span>
                    <h3 class="quiz-title">${quiz.title}</h3>
                    <p class="quiz-description">${quiz.description}</p>
                    <div class="quiz-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" viewBox="0 0 24 24">
                                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                            </svg>
                            ${quiz.questions} questions
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" viewBox="0 0 24 24">
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                            </svg>
                            ${quiz.duration} min
                        </div>
                    </div>
                    <div class="quiz-actions">
                        <button class="btn btn-edit" onclick="editQuiz(${quiz.id})">Edit</button>
                        <button class="btn btn-delete" onclick="deleteQuiz(${quiz.id})">Delete</button>
                    </div>
                </div>
            `).join('');
}

function openModal(quiz = null) {
    const modal = document.getElementById('modal');
    const form = document.getElementById('quizForm');
    const modalTitle = document.getElementById('modalTitle');

    if (quiz) {
        modalTitle.textContent = 'Edit Quiz';
        document.getElementById('quizName').value = quiz.title;
        document.getElementById('quizDescription').value = quiz.description;
        document.getElementById('quizQuestions').value = quiz.questions;
        document.getElementById('quizDuration').value = quiz.duration;
        document.getElementById('quizStatus').value = quiz.status;
        editingId = quiz.id;
    } else {
        modalTitle.textContent = 'Create New Quiz';
        form.reset();
        editingId = null;
    }

    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    editingId = null;
}

function editQuiz(id) {
    const quiz = quizzes.find(q => q.id === id);
    if (quiz) {
        openModal(quiz);
    }
}

function deleteQuiz(id) {
    if (confirm('Are you sure you want to delete this quiz?')) {
        quizzes = quizzes.filter(q => q.id !== id);
        renderQuizzes();
    }
}

document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const newQuiz = {
        id: editingId || Date.now(),
        title: document.getElementById('quizName').value,
        description: document.getElementById('quizDescription').value,
        questions: parseInt(document.getElementById('quizQuestions').value),
        duration: parseInt(document.getElementById('quizDuration').value),
        status: document.getElementById('quizStatus').value
    };

    if (editingId) {
        const index = quizzes.findIndex(q => q.id === editingId);
        quizzes[index] = newQuiz;
    } else {
        quizzes.push(newQuiz);
    }

    renderQuizzes();
    closeModal();
});

window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

renderQuizzes();
