
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});


const form = document.getElementById('contactForm');
const responseMsg = document.getElementById('responseMsg');

form.addEventListener('submit', e => {
  e.preventDefault();

  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    responseMsg.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
    responseMsg.style.color = '#38bdf8';
    form.reset();
  } else {
    responseMsg.textContent = 'Please fill in all fields!';
    responseMsg.style.color = '#f87171';
  }

  setTimeout(() => {
    responseMsg.textContent = '';
  }, 4000);
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});


