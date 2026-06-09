// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const htmlElement = document.documentElement;
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        htmlElement.style.colorScheme = 'dark';
        updateThemeIcon('dark');
    } else {
        body.classList.remove('dark-mode');
        htmlElement.style.colorScheme = 'light';
        updateThemeIcon('light');
    }
    
    // Theme toggle button click handler
    themeToggleBtn.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            // Switch to light mode
            body.classList.remove('dark-mode');
            htmlElement.style.colorScheme = 'light';
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        } else {
            // Switch to dark mode
            body.classList.add('dark-mode');
            htmlElement.style.colorScheme = 'dark';
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        }
    });
    
    // Update theme icon based on current theme
    function updateThemeIcon(theme) {
        const icon = document.querySelector('.theme-icon');
        if (theme === 'dark') {
            icon.classList.remove('bi-moon-stars');
            icon.classList.add('bi-sun-fill');
        } else {
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-stars');
        }
    }
    
    // Optional: Check for system preference (prefers-color-scheme)
    if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            body.classList.add('dark-mode');
            htmlElement.style.colorScheme = 'dark';
            updateThemeIcon('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
});
