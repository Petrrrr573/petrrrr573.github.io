const nav_button = document.querySelector('.nav-mobile-toggle');
const navbar = document.querySelector(".navbar");
nav_button.addEventListener('click', () => {
  const toggle = navbar.getAttribute('data-toggled');
  if (toggle === "false") {
    navbar.setAttribute('data-toggled', true);
  } else {
    navbar.setAttribute('data-toggled', false);
  }

  console.log(toggle);
})