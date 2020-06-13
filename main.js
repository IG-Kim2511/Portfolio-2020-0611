"use strict";

//js refresh page every 2 seconds (완성 이후 지우기)

// setTimeout(function () {
//   window.location.reload(1);
// }, 2000);

// c58. show navbar with scroll (make navbar transparent when it is on the top)

//  <오답노트>
// ifelse, toggle, scrollY

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// c60. click menu btn and move to there. (handle scrolling when tapping  on the navbar menu. )

//  <오답노트>
// navbar__menu 가져옴
// event.target
// target= event.target;
// target.dataset.link;

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", () => {
  console.log(event.target);
  console.log(event.target.dataset.link);

  const target = event.target;
  const link = target.dataset.link;

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });

  if (link == null) {
    return;
  }
  // (74). 모바일에서 scroll할때는 navbar가 닫혀지게..
  navbarMenu.classList.remove("open");
});

// c74. navbar toggle button for small  screen.

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Handle click on 'contact me' button on home

const homeContactBtn = document.querySelector(".home__contact");

homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// my work
// c72. remove selection from the previous item and select the next selection

// // c74
// const toggleBtn = document.querySelector(".navbar__toggle-btn");

// toggleBtn.addEventListener("click", () => {
//   navbarMenu.classList.toggle("open");
// });
