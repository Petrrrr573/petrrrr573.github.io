// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const blueButton = document.getElementById('blue');
const solarButton = document.getElementById('solar');
const body = document.body;


// Apply the cached theme on reload

const theme = sessionStorage.getItem('theme');
const isSolar = sessionStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  body.classList.replace('blue', 'dark');
  sessionStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  body.classList.replace('blue', 'light');
  sessionStorage.setItem('theme', 'light');
};

blueButton.onclick = () => {
  body.classList.replace('dark', 'blue');
  body.classList.replace('light', 'blue');
  sessionStorage.setItem('theme', 'blue');
};


document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})
