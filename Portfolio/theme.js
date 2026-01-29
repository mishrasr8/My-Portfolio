const toggle = document.getElementById('themeToggle');
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
      toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    });
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light');

      if (document.body.classList.contains('light')) {
        themeToggle.textContent = '☀️';
      } else {
        themeToggle.textContent = '🌙';
      }
    });
    // Theme toggle
    document.addEventListener('DOMContentLoaded', () => {
      const themeToggle = document.getElementById('themeToggle');

      if (!themeToggle) return;

      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light');
        themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
      });
    });
    