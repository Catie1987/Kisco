const body = document.querySelector("body"),
showMenu = body.querySelector(".menu-btn"),
showMenuIcon = body.querySelector(".menu-btn i"),
btnBacktoTop = body.querySelector(".back-top-btn"),
showLang = body.querySelector(".lang-box"),
btnLang = body.querySelector(".lang-drop"),
langList = body.querySelector(".lang-list"),
langType = body.querySelectorAll(".lang-type"),
searchBox = body.querySelector(".search-box"),
clearSearch = body.querySelector(".clearsearch-btn"),
navbar = body.querySelector(".navbar"),
productBar = body.querySelector(".title-bar"),
iconShowProduct = body.querySelector(".icon-dropmenu"),
btnShowProduct = body.querySelector(".drop-menu");


/*--------------Showproduct Bar--------------------*/
btnShowProduct.addEventListener("click" , () => {
  productBar.classList.toggle("active");
  const isShow = productBar.classList.contains("active");
  iconShowProduct.classList = isShow
  ? 'bx bx-chevrons-up'
  : 'bx bx-chevrons-down'
});

/*--------------dragtitlebar--------------------*/

const tabsBox = document.querySelector(".title-links");
const arrowIcons = document.querySelectorAll(".arrow-nav i");


arrowIcons.forEach(icon => {
  icon.addEventListener("click" , () => {
    tabsBox.scrollLeft += icon.id === "left" ? -300 : 300;
  });

});

/*--------------show hide menu--------------------*/

showMenu.addEventListener("click", () => {
    navbar.classList.toggle("show");
    const isOpen = navbar.classList.contains("show");
  showMenuIcon.classList = isOpen
  ? 'bx bx-x'
  : 'bx bx-menu'
});

/*--------------Language--------------------*/

showLang.addEventListener("click", () => {
  langList.classList.toggle("drop");
  btnLang.classList.toggle("drop");
});

langType.forEach(type => {
    type.addEventListener ("click",() =>{
      var link = type.querySelector("a");
      var newlink = link.getAttribute("id");
      var sub = langList.getAttribute("id");
      let arr = ['../../' , newlink , sub];
      let str = arr.join('');
      langList.classList.remove("drop");
      window.location.assign(str);
    });
});

/*--------------searchbar--------------------*/

const clearText = () => {
  const name = document.querySelector("#search-type");
  name.value = "";
};

/*--------------change color navbar--------------------*/

document.addEventListener('scroll' , () => {
  const header = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
    btnBacktoTop.classList.add("active");
    header.classList.remove('show');
    showMenuIcon.classList = 'bx bx-menu'
  } else {
    header.classList.remove('scrolled');
    btnBacktoTop.classList.remove("active");
  };
});

/*--------------scroll to hide--------------------*/
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navbar.classList.add("nav-hidden");
  } else {
    navbar.classList.remove("nav-hidden");
  }
  lastScrollY = window.scrollY;
});

/*--------------scorlleffect--------------------*/

