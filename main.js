"use strict";

//js refresh page every 2 seconds (완성 이후 지우기)

setTimeout(function () {
  window.location.reload(1);
}, 2000);

// c58. make navbar transparent when it is on the top

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// my work
// c72. remove selection from the previous item and select the next selection

