// Scroll animation
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // Smooth scrolling
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });

  // THEME TOGGLE — GUARANTEED WORKING
  const themeToggle = document.getElementById('themeToggle');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
      themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    });
  }

  // Skill filter
  function filterSkills(category) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('.skill-pill').forEach(skill => {
      if (category === 'all' || skill.classList.contains(category)) {
        skill.style.display = 'inline-block';
      } else {
        skill.style.display = 'none';
      }
    });
  }