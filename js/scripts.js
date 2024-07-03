document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('toggle-theme-btn');

    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

    // Add scroll animations
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.fade-in-left').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.fade-in-right').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.fade-in-down').forEach(element => {
        observer.observe(element);
    });
});
