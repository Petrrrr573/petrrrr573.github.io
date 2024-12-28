const nav_button = document.querySelector('.nav-btn');
const navbar = document.querySelector(".navbar");
nav_button.addEventListener('click', () => {
  const toggle = navbar.getAttribute('toggled');
  if (toggle === "false") {
    navbar.setAttribute('toggled', true);
  } else {
    navbar.setAttribute('toggled', false);
  }
})