const btn = document.getElementById("btn-drop");
const titleBar = document.querySelector(".title-bar");

  btn.addEventListener("click",() =>{
  btn.classList.toggle("active");
  titleBar.classList.toggle("active");
});