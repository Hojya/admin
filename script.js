
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
  let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
  arrowParent.classList.toggle("showMenu");
  });
  }
  let kupaneg = document.querySelector(".kupaneg");
  let kupanegBtn = document.querySelector(".bx-menu");
  console.log(kupanegBtn);
  kupanegBtn.addEventListener("click", ()=>{
  kupaneg.classList.toggle("close");
  });
  
