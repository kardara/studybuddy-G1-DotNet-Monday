
function startLearning() {
    alert('Redirecting to your personalized dashboard...');
    // Add your navigation logic here
    // window.location.href = '/Dashboard';
}

function exploreCourses() {
    alert('Opening course catalog...');
    // Add your navigation logic here
    // window.location.href = '/Courses';
}

// Add floating animation to feature cards on scroll
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});