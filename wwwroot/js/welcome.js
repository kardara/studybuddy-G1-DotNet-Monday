
function startLearning() {
    alert('Redirecting to your personalized dashboard...')
}


function exploreCourses() {
    alert('Opening course catalog...');
}

function login() {
    alert('Opening login form...');
}

function register() {
    alert('Opening registration form...');
}


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});