// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);
    
    // Toggle theme when button is clicked
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });
    
    // Update icon based on current theme
    function updateIcon(theme) {
        if (theme === 'dark') {
            darkModeIcon.className = 'fas fa-sun';
            darkModeToggle.title = 'Switch to Light Mode';
        } else {
            darkModeIcon.className = 'fas fa-moon';
            darkModeToggle.title = 'Switch to Dark Mode';
        }
    }
    
    // Check for system preference on first load
    if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', defaultTheme);
        localStorage.setItem('theme', defaultTheme);
        updateIcon(defaultTheme);
    }
});
