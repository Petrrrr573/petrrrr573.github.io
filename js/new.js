// window.addEventListener("scroll", function(e) {
//   const target = document.querySelector("#main");

//   var scrolled = window.scrollY;
//   var rate = scrolled * 0.90;

//   target.style.transform = "translate3d(0px, "+rate/50+"rem, 0px)";
// });


let client_y = 0; // Used for storing the last y position of cursor
let client_x = 0; // Used for storing the last x position of cursor
const cursor = document.getElementById("cursor");

function MouseAction(event) {
  const { clientX, clientY } = event;
  scrollPosition = window.scrollY;

  if(clientX != undefined && clientY != undefined){ // Stores last positions of cursor
    client_y = clientY;
    client_x = clientX;
  }
  cursor.animate({
    left: `${client_x}px`,
    top: `${client_y}px`,
  }, { duration: 250, fill: "forwards" })
}

document.addEventListener("mousemove", MouseAction);


const largerCircle = document.getElementById("largerCircle");
window.addEventListener("click", function(e){
  largerCircle.animate({
    opacity: 0,
    r: 40 + "px",
  }, { duration: 100, fill: "forwards" });
  largerCircle.animate({
    opacity: 1,
    r: 20 + "px",
  }, {duration: 100, fill: "forwards" });
});


const ifIsMobile = { // detect the mobile devices
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (ifIsMobile.Android() || ifIsMobile.BlackBerry() || ifIsMobile.iOS() || ifIsMobile.Opera() || ifIsMobile.Windows());
}};




const loadMobileCss = () => { // add the link tag to load mobilestyles.css
                const linke = document.createElement("link");
                linke.rel = "stylesheet";
                linke.href = "mobilestyles.css";
                document.getElementsByTagName("head")[0].appendChild(linke);
            }


 if (ifIsMobile.any()) {
  cursor.style.display = "none";  
  var elementToChange = document.getElementsByTagName("body")[0];
  elementToChange.style.cursor = "default";
}