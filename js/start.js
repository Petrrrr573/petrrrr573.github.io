let english = document.querySelectorAll(".english");
let czech = document.querySelectorAll(".czech");

window.addEventListener("DOMContentLoaded", ()=>{

  setTimeout(()=>{

    english.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add("active_first");
      }, (idx + 1) * 400)
    });

    setTimeout(()=>{
      english.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove("active_first");
          span.classList.add("active_second");
        }, (idx + 1) * 50)
      })
    },1000);
    

    czech.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add("active_first");
      }, (idx + 1) * 400)
    });

    setTimeout(()=>{
      czech.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove("active_first");
          span.classList.add("active_second");
        }, (idx + 1) * 50)
      })
    },1000);
  })
});