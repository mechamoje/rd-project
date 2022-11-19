const navLink = document.querySelector(".dropdown-click");
const menu = document.querySelector("#dropdown-menu");
const play = document.querySelector(".player");
const modal = document.querySelector(".modal-wrapper");
const close = document.querySelector(".modal-close");
const hamburguerBtn = document.querySelector("#hamburguer-container");
const navList = document.querySelector(".nav-list");
const navBar = document.querySelector(".navbar");

navLink.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

play.addEventListener("click", () => {
  modal.classList.add("active-modal");
});

close.addEventListener("click", () => {
  modal.classList.remove("active-modal");
});

modal.addEventListener("click", () => {
  modal.classList.remove("active-modal");
});

hamburguerBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-mobile");
  navBar.classList.toggle("visible-mobile");
  navLink.classList.toggle("dropdown-mobile");
});
