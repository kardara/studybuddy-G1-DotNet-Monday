// Quiz Management JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const createQuizBtn = document.getElementById('createQuizBtn');
    const createFirstQuizBtn = document.getElementById('createFirstQuizBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const quizModal = document.getElementById('quizModal');
    const quizForm = document.getElementById('quizForm');
    const quizContainer = document.getElementById('quizContainer');
    const emptyState = document.getElementById('emptyState');

    let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

    // Display existing quizzes
    displayQuizzes();

    // Event listeners
    createQuizBtn.addEventListener('click', openModal);
    createFirstQuizBtn.addEventListener('click', openModal);
    cancelBtn.addEventListener('click', closeModal);

    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();
        saveQuiz();
    });

    function openModal() {
        quizModal.style.display = 'block';
        quizForm.reset();
    }

    function closeModal() {
        quizModal.style.display = 'none';
    }

    function saveQuiz() {
        const quiz = {
            id: Date.now(),
            title: document.getElementById('quizName').value,
            description: document.getElementById('quizDescription').value,
            numberOfQuestions: parseInt(document.getElementById('quizQuestions').value),
            duration: parseInt(document.getElementById('quizDuration').value),
            status: document.getElementById('quizStatus').value
        };

        quizzes.push(quiz);
        localStorage.setItem('quizzes', JSON.stringify(quizzes));

        displayQuizzes();
        closeModal();
    }

    function displayQuizzes() {
        if (quizzes.length > 0) {
            emptyState.style.display = 'none';
            quizContainer.innerHTML = quizzes.map(quiz => `
                <div class="quiz-card">
                    <h3>${quiz.title}</h3>
                    <p>${quiz.description}</p>
                    <p><strong>Questions:</strong> ${quiz.numberOfQuestions}</p>
                    <p><strong>Duration:</strong> ${quiz.duration} minutes</p>
                    <span class="status ${quiz.status}">${quiz.status}</span>
                </div>
            `).join('');
        } else {
            emptyState.style.display = 'block';
            quizContainer.innerHTML = '';
        }
    }

    // Close modal when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target === quizModal) {
            closeModal();
        }
    });
});