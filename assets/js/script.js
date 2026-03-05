// Sidebar toggle (only present on sub-pages)
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar-toggle');
const toggleTheme = document.getElementById('theme-toggle');

if (sidebar && toggle) {
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        toggle.classList.toggle('active');
    });
}

// Smooth scrolling for internal anchors
document.querySelectorAll('a[href^="#"]').forEach( () => {
    anchor.addEventListener("click", () => {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Toggle light/dark theme
if (toggleTheme) {
    toggleTheme.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        toggleTheme.classList.toggle('active');
        
        // Optional: change icon 
        if (document.documentElement.classList.contains('light')) { 
            toggleTheme.textContent = "🌙"; 
        } else {
             toggleTheme.textContent = "☀️"; 
        }
    });
}

