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

// make home slowly fad to transparent as the window scrolls down
// <오답노트>
// home.getBoundingClientRect().height;
// const home = document.querySelector("#home");
// const homeHeight = home.offsetheight;
//   home.style.opacity = 1 - window.scrollY / homeHeight;

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// show "arrow up" button when scrolling down

const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//click arrow up and move to 'home'
// <오답노트> scrollIntoView

// const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// 68 project

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  // 68-1

  const filter = e.target.dataset.filter;

  if (filter == null) {
    return;
  }
  // 68-2 forEach

  projects.forEach((project) => {
    console.log(project.dataset.type);

    if (filter === "*" || filter == "project.dataset.type") {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});

// my work
// c72. remove selection from the previous item and select the next selection

// // c74
// const toggleBtn = document.querySelector(".navbar__toggle-btn");

// toggleBtn.addEventListener("click", () => {
//   navbarMenu.classList.toggle("open");
// });
