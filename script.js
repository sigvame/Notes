const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebarMenu');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.start-screen');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'white';
    header.style.color = 'black';
  } else {
    header.style.backgroundColor = 'black';
    header.style.color = 'white';
  }
});


