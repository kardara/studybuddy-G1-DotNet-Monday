// Quiz data structure
let quizzes = [
    {
        id: 1,
        title: "Mathematics Basics",
        description: "Test your fundamental math skills including algebra and arithmetic.",
        questions: 15,
        duration: 45,
        category: "mathematics",
        status: "completed",
        score: 85,
        maxScore: 100,
        completedAt: "2024-01-15"
    },
    {
        id: 2,
        title: "Science Fundamentals",
        description: "Covering basic concepts in physics, chemistry, and biology.",
        questions: 20,
        duration: 60,
        category: "science",
        status: "completed",
        score: 92,
        maxScore: 100,
        completedAt: "2024-01-18"
    },
    {
        id: 3,
        title: "Web Development Quiz",
        description: "Test your knowledge of HTML, CSS, and JavaScript fundamentals.",
        questions: 25,
        duration: 75,
        category: "programming",
        status: "available"
    },
    {
        id: 4,
        title: "World History",
        description: "Important events and figures from ancient to modern history.",
        questions: 30,
        duration: 90,
        category: "history",
        status: "available"
    },
    {
        id: 5,
        title: "English Grammar",
        description: "Advanced grammar rules and sentence structure analysis.",
        questions: 18,
        duration: 50,
        category: "language",
        status: "unfinished",
        progress: 8,
        lastAttempt: "2024-01-20"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    loadQuizzes();
    setupEventListeners();
});

function loadQuizzes() {
    const quizGrid = document.getElementById('quizGrid');
    const emptyState = document.getElementById('emptyState');

    if (quizzes.length === 0) {
        quizGrid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    quizGrid.style.display = 'grid';
    emptyState.style.display = 'none';
    quizGrid.innerHTML = '';

    quizzes.forEach(quiz => {
        const quizCard = createQuizCard(quiz);
        quizGrid.appendChild(quizCard);
    });
}

function createQuizCard(quiz) {
    const card = document.createElement('div');
    card.className = 'quiz-card';

    let statusClass = '';
    let statusText = '';
    let actionButton = '';

    switch (quiz.status) {
        case 'completed':
            statusClass = 'status-completed';
            statusText = 'Completed';
            actionButton = `<button class="btn btn-success" onclick="viewResults(${quiz.id})">View Results</button>`;
            break;
        case 'available':
            statusClass = 'status-available';
            statusText = 'Available';
            actionButton = `<button class="btn btn-primary" onclick="takeQuiz(${quiz.id})">Take Quiz</button>`;
            break;
        case 'unfinished':
            statusClass = 'status-unfinished';
            statusText = 'Unfinished';
            actionButton = `<button class="btn btn-warning" onclick="continueQuiz(${quiz.id})">Continue Quiz</button>`;
            break;
    }

    card.innerHTML = `
        <div class="quiz-card-header">
            <div>
                <h3 class="quiz-card-title">${quiz.title}</h3>
                <span class="quiz-status ${statusClass}">${statusText}</span>
            </div>
        </div>
        <p class="quiz-card-description">${quiz.description}</p>
        <div class="quiz-meta">
            <div class="meta-item">
                <div class="meta-label">Questions</div>
                <div class="meta-value">${quiz.questions}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Duration</div>
                <div class="meta-value">${quiz.duration} min</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Category</div>
                <div class="meta-value">${formatCategory(quiz.category)}</div>
            </div>
        </div>
        ${quiz.status === 'completed' ? `
            <div class="quiz-score">
                <div class="score-display">
                    <span class="score-label">Score: </span>
                    <span class="score-value">${quiz.score}/${quiz.maxScore}</span>
                    <div class="score-bar">
                        <div class="score-progress" style="width: ${(quiz.score / quiz.maxScore) * 100}%"></div>
                    </div>
                </div>
            </div>
        ` : ''}
        ${quiz.status === 'unfinished' ? `
            <div class="quiz-progress">
                <div class="progress-info">
                    <span class="progress-label">Progress: ${quiz.progress}/${quiz.questions} questions</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(quiz.progress / quiz.questions) * 100}%"></div>
                    </div>
                </div>
            </div>
        ` : ''}
        <div class="quiz-actions">
            ${actionButton}
            <button class="btn btn-secondary" onclick="viewQuizDetails(${quiz.id})">Details</button>
        </div>
    `;

    return card;
}

function formatCategory(category) {
    const categories = {
        'mathematics': 'Mathematics',
        'science': 'Science',
        'history': 'History',
        'programming': 'Programming',
        'language': 'Language'
    };
    return categories[category] || category;
}

// Quiz Actions
function takeQuiz(quizId) {
    const quiz = quizzes.find(q => q.id === quizId);
    if (quiz) {
        showNotification(`Starting quiz: ${quiz.title}`, 'success');
        // Simulate navigation to quiz page
        setTimeout(() => {
            alert(`You are now taking the quiz: ${quiz.title}\n\nThis would navigate to the actual quiz interface.`);
        }, 1000);
    }
}

function continueQuiz(quizId) {
    const quiz = quizzes.find(q => q.id === quizId);
    if (quiz) {
        showNotification(`Continuing quiz: ${quiz.title}`, 'warning');
        // Simulate continuing quiz
        setTimeout(() => {
            alert(`Continuing unfinished quiz: ${quiz.title}\n\nYou completed ${quiz.progress} out of ${quiz.questions} questions.`);
        }, 1000);
    }
}

function viewResults(quizId) {
    const quiz = quizzes.find(q => q.id === quizId);
    if (quiz) {
        showNotification(`Viewing results for: ${quiz.title}`, 'info');
        // Simulate viewing results
        setTimeout(() => {
            alert(`Quiz Results: ${quiz.title}\n\nScore: ${quiz.score}/${quiz.maxScore} (${(quiz.score / quiz.maxScore) * 100}%)\nCompleted: ${quiz.completedAt}`);
        }, 1000);
    }
}

function viewQuizDetails(quizId) {
    const quiz = quizzes.find(q => q.id === quizId);
    if (quiz) {
        const details = `
Quiz: ${quiz.title}
Description: ${quiz.description}
Questions: ${quiz.questions}
Duration: ${quiz.duration} minutes
Category: ${formatCategory(quiz.category)}
Status: ${quiz.status}
${quiz.status === 'completed' ? `Score: ${quiz.score}/${quiz.maxScore}` : ''}
${quiz.status === 'unfinished' ? `Progress: ${quiz.progress}/${quiz.questions} questions` : ''}
        `;
        alert(details);
    }
}

// Modal Functions
function createNewQuiz() {
    document.getElementById('createQuizModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('createQuizModal').style.display = 'none';
    document.getElementById('quizForm').reset();
}

function setupEventListeners() {
    // Form submission
    document.getElementById('quizForm').addEventListener('submit', function (e) {
        e.preventDefault();
        createQuizFromForm();
    });

    // Close modal when clicking outside
    document.getElementById('createQuizModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

function createQuizFromForm() {
    const formData = {
        title: document.getElementById('quizTitle').value,
        description: document.getElementById('quizDescription').value,
        questions: parseInt(document.getElementById('quizQuestions').value),
        duration: parseInt(document.getElementById('quizDuration').value),
        category: document.getElementById('quizCategory').value,
        status: 'available'
    };

    const newQuiz = {
        id: quizzes.length + 1,
        ...formData
    };

    quizzes.push(newQuiz);
    loadQuizzes();
    closeModal();
    showNotification('Quiz created successfully!', 'success');
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'warning' ? '#ed8936' : '#667eea'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add some CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .quiz-score, .quiz-progress {
        margin-bottom: 20px;
    }
    
    .score-bar, .progress-bar {
        height: 8px;
        background: #e2e8f0;
        border-radius: 4px;
        margin-top: 8px;
        overflow: hidden;
    }
    
    .score-progress, .progress-fill {
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 4px;
        transition: width 0.3s ease;
    }
    
    .score-display, .progress-info {
        font-size: 0.9em;
        color: #4a5568;
    }
    
    .score-value {
        font-weight: 600;
        color: #2d3748;
    }
`;
document.head.appendChild(style);