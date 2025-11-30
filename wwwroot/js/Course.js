// Search functionality
document.getElementById('searchInput').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    filterCourses();
});

// Filter functionality
document.getElementById('categoryFilter').addEventListener('change', filterCourses);
document.getElementById('levelFilter').addEventListener('change', filterCourses);

function filterCourses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const levelFilter = document.getElementById('levelFilter').value;
    const cards = document.querySelectorAll('.course-card');

    cards.forEach(card => {
        const title = card.querySelector('.course-title').textContent.toLowerCase();
        const description = card.querySelector('.course-description').textContent.toLowerCase();
        const category = card.querySelector('.course-category').textContent.toLowerCase();
        const level = card.querySelector('.meta-value.level-beginner, .meta-value.level-intermediate, .meta-value.level-advanced').textContent.toLowerCase();

        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || category === categoryFilter;
        const matchesLevel = levelFilter === 'all' || level === levelFilter;

        if (matchesSearch && matchesCategory && matchesLevel) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}