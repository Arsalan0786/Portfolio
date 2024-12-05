// Select the theme toggle button
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference in local storage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme on page load
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Add event listener for theme toggle
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
  updateToggleIcon();
});

// Initialize the toggle icon on page load
updateToggleIcon();
document.querySelector('.newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload
  alert('Thank you for signing up!');
});

// Example: Logging viewport size changes for debugging
window.addEventListener('resize', () => {
  console.log(`Viewport size: ${window.innerWidth}x${window.innerHeight}`);
});


