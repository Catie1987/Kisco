const showMenu = document.querySelector(".menu-btn");
const showMenuIcon = document.querySelector(".hamburger-icon");
const navlink = document.querySelector("header nav");


showMenu.addEventListener("click", () => {
    showMenuIcon.classList.toggle("active");
    
    if (showMenuIcon.classList.contains("active")) {
      navlink.classList.add("show");
    } else {
      navlink.classList.remove("show");
    }

  });


  const showLang = document.querySelector(".lang-box");
  const btnLang = document.querySelector(".lang-drop");
  const langList = document.querySelector(".lang-list");



    /*--------------Language--------------------*/

showLang.addEventListener("click", () => {
langList.classList.toggle("drop");
btnLang.classList.toggle("drop");

});

