document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    hamburgerMenu.addEventListener('click', function() {
      hamburgerMenu.classList.toggle('change'); // Toggle the 'change' class on click
      navLinks.classList.toggle('open'); // Toggle the 'open' class on navLinks
    });
  });
  