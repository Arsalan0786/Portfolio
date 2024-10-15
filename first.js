// Dark mode toggle script
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.toggle('dark-mode');
  });
  document.querySelector('header').classList.toggle('dark-mode');
  document.querySelector('footer').classList.toggle('dark-mode');
});
