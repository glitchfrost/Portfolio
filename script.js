// ========== toggle icon navbar ==========
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu when clicking on a nav link
let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top > offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
      });

      // Use quotes for attribute selector to prevent errors
      let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
 });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Only close menu on scroll if it's currently open
  if (navbar.classList.contains('active')) {
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
  }
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.cert-card');
      card.classList.add('show-image');
    });
  });

  document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.cert-card');
      card.classList.remove('show-image');
    });
  });
});


// ==================scroll reveal==================

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.homecontent, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .certificate-drum, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.homecontent h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.homecontent p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.technical-skills, .coding-profile', { origin: 'left' });
ScrollReveal().reveal('.skills-list', { origin: 'right' });
ScrollReveal().reveal('.portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.education h2', { origin: 'top' });
ScrollReveal().reveal('.edu-entry', { origin: 'bottom' });
ScrollReveal().reveal('.certificate-drum', { origin: 'bottom' });
ScrollReveal().reveal('.contact form', { origin: 'bottom' });


// ==================typed js==================

var typed = new Typed('.multiple-text', {
  strings: ['FrontEnd Developer', 'Web Developer', 'Software Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ==================typed js==================


function toggleReadMore() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = document.getElementById("readMoreBtn");

  if (more.style.display === "inline" || more.style.display === "") {
    more.style.display = "none";
    dots.style.display = "inline";
    btn.textContent = "Read More";
  } else {
    more.style.display = "inline";
    dots.style.display = "none";
    btn.textContent = "Read Less";
  }
}

document.querySelectorAll('.view-certificate-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const card = this.closest('.certificate-box');
    card.classList.toggle('show-img');
    // Optionally, change button text to "Hide" or "View"
    this.textContent = card.classList.contains('show-img') ? 'Hide' : 'View';
  });
});





document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop default form submission

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData
      })
      .then(response => {
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Something went wrong. Please try again.");
        }
        form.reset(); // Always reset the form
      })
      .catch(error => {
        alert("Error: " + error.message);
        form.reset(); // Also reset the form on error
      });
    });
  }
});


