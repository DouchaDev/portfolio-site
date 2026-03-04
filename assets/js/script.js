// Sidebar toggle (only present on sub-pages)
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar-toggle');

if (sidebar && toggle) {
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        toggle.classList.toggle('active');
    });
}

// Smooth scrolling for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});
