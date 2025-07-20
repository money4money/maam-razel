const toggleBtn = document.getElementById('toggleMode');
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

menuToggle.addEventListener('click', () => {
  mainMenu.classList.toggle('hidden');
});
