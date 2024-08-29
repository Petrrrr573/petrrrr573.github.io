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