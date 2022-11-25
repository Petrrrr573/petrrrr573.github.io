let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let logoSpan2 = document.querySelectorAll(".logo2");
const body = document.body;

window.addEventListener("DOMContentLoaded", ()=>{

  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add("active");
      }, (idx + 1) * 400)
    });

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50)
      })
    },4000);

    setTimeout(()=>{
      intro.style.top = "-100vh";
    },4250);

  })


});



window.addEventListener("DOMContentLoaded", ()=>{

  setTimeout(()=>{

    logoSpan2.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add("active");
      }, (idx + 1) * 2000)
    });

    setTimeout(()=>{
      logoSpan2.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50)
      })
    },4000);

  })


});




// window.addEventListener(('load'), () => {
//   if(document.querySelector('.main_page') !== null) {
//  window.sessionStorage.setItem('Main_page', 'displayed');
//  }
//  })

//  if (window.sessionStorage.getItem('Main_page')) {
//   document.querySelector('.main_page').classList.remove('animated');

//   document.querySelector('.main_page').style.opacity = '1';
//   intro.style.display = "none";
// };

// window.addEventListener(('load'), () => {
//   if(document.querySelector('.navbar-main') !== null) {
//  window.sessionStorage.setItem('navbar', 'displayed');
//  }
//  })
//  if (window.sessionStorage.getItem('navbar')) {
//   document.querySelector('.navbar-main').classList.remove('animated');

//   document.querySelector('.navbar-main').style.opacity = '1';
// };



// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const blueButton = document.getElementById('blue');
const solarButton = document.getElementById('solar');


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
});

window.addEventListener("scroll", function(e) {
  const target = document.querySelector(".main");

  var scrolled = window.pageYOffset;
  var rate = scrolled * 0.75;

  target.style.transform = "translate3d(0px, "+rate/50+"rem, 0px)";
});