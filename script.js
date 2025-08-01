document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    if (themeToggle) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark-mode");
            themeToggle.textContent = "☀️";
        }

        themeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
            const isDark = body.classList.contains("dark-mode");
            themeToggle.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }
});
