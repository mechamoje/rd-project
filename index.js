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

const firstInput = document.querySelector("#password1");
const secondPassword = document.querySelector("#password2");

// const myString = "This is my test string: AA.12.B.12 with some other chars";
// let res = /[a-zA-Z]/.test(myString);
// console.log(res);

let upper = firstInput.value.match(/[A-Z]+/); //letras MAIUSCULAS
let lower = firstInput.value.match(/[a-z]+/); //letras minusculas
let numbers = firstInput.value.match(/[0-9]+/);

function testPassword() {
  console.log(firstInput.value.length, firstInput.value);
  if (firstInput.value.length >= 6 && firstInput.value.length <= 12) {
    if (firstInput.value.match(/[A-Z]+/)) {
      if (firstInput.value.match(/[a-z]+/)) {
        if (firstInput.value.match(/[0-9]+/)) {
          console.log("maiscu, minus e + 6 e number");
        } else {
          console.log("no number");
        }
      } else {
        console.log("no minus");
      }
    } else {
      console.log("no maiusc");
    }
  } else {
    console.log("no size");
  }
} //tentar mudar a msg de erro

function comparePasswords() {
  if (firstInput.value.length > 0 && secondPassword.value.length > 0) {
    if (firstInput.value === secondPassword.value) {
      console.log("iguais");
    } else {
      console.log("diff");
    }
  }
}

function showHidePassword1() {
  var senha = document.querySelector("#password1");
  const closedEye = document.querySelector("#eye1");
  const openedEye = document.querySelector(".hide");
  if (senha.type == "password") {
    senha.type = "text";
    closedEye.classList.toggle("hide");
    openedEye.classList.toggle("show");
    console.log("show");
  } else {
    senha.type = "password";
    console.log("hide");
  }
}

function showHidePassword2() {
  var senha = document.querySelector("#password2");
  const closedEye = document.querySelector("#eye2");
  const openedEye = document.querySelector(".hide2");
  if (senha.type == "password") {
    senha.type = "text";
    closedEye.classList.toggle("hide");
    openedEye.classList.toggle("show");
    console.log("show");
  } else {
    senha.type = "password";
    closedEye.classList.toggle("hide");
    openedEye.classList.toggle("show");
    console.log("hide");
  }
}
