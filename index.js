const navLink = document.querySelector(".dropdown-click");
const menu = document.querySelector("#dropdown-menu");
const play = document.querySelector(".player");
const modal = document.querySelector(".modal-wrapper");
const close = document.querySelector(".modal-close");
const video = document.querySelector(".modal-content");
const hamburguerBtn = document.querySelector("#hamburguer-container");
const navList = document.querySelector(".nav-list");
const navBar = document.querySelector(".navbar");

navLink.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

play.addEventListener("click", () => {
  modal.classList.add("active-modal");
  video.setAttribute(
    "src",
    "https://www.youtube.com/embed/lGCesaaLi4s?autoplay=1"
  );
});

close.addEventListener("click", () => {
  modal.classList.remove("active-modal");
  video.setAttribute("src", "https://www.youtube.com/embed/lGCesaaLi4s");
});

modal.addEventListener("click", () => {
  modal.classList.remove("active-modal");
  video.setAttribute("src", "https://www.youtube.com/embed/lGCesaaLi4s");
});

hamburguerBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-mobile");
  navBar.classList.toggle("visible-mobile");
  navLink.classList.toggle("dropdown-mobile");
});

function telMask(telefone) {
  const ddd = telefone.slice(0, 2);
  const numero = telefone.slice(2);
  const beforeIf = numero.length >= 9 ? numero.slice(0, 5) : numero.slice(0, 4);
  const resto = -(numero.length - beforeIf.length);
  let afterIf = resto == 0 ? "" : numero.slice(resto);

  return `(${ddd}) ${beforeIf}-${afterIf}`;
}

function removeTelMask(telefonemask) {
  return telefonemask.replace(/\D/g, "");
}

const telInput = document.querySelector("#tel-input");
telInput.addEventListener("keyup", () => {
  telInput.value = telMask(removeTelMask(telInput.value));
});

const firstInput = document.querySelector("#password1");
const secondInput = document.querySelector("#password2");

const firstError = document.querySelector("#errormsg1");
const secondError = document.querySelector("#errormsg2");

const form = document.querySelector("#oportunities-form");
form.addEventListener("submit", (e) => showFeedback(e));

function comparePasswords() {
  if (firstInput.value.length > 0 && secondInput.value.length > 0) {
    if (firstInput.value === secondInput.value) {
      firstError.innerHTML = `
      ✅ 
      <br> `;
      return true;
    } else {
      firstError.innerHTML = `
      ⚠️ As senhas devem ser iguais'
      <br> `;
    }
  }
  return false;
}

function testPassword1() {
  if (firstInput.value.length >= 6 && firstInput.value.length <= 12) {
    if (firstInput.value.match(/[A-Z]+/)) {
      if (firstInput.value.match(/[a-z]+/)) {
        if (firstInput.value.match(/[0-9]+/)) {
          firstError.innerHTML = `
          ✅ 
          <br>
          `;
          return true;
        } else {
          firstError.innerHTML = `
          ⚠️ Números
          <br>
          `;
        }
      } else {
        firstError.innerHTML = `
        ⚠️ Letras minúsculas
    <br>
    `;
      }
    } else {
      firstError.innerHTML = `
      ⚠️ Letras maiúsculas
      <br>
      `;
    }
  } else {
    firstError.innerHTML = `
    ⚠️ Mais de 6 dígitos
    <br>
    `;
  }
  return false;
}

function testPassword2() {
  if (secondInput.value.length >= 6 && secondInput.value.length <= 12) {
    if (secondInput.value.match(/[A-Z]+/)) {
      if (secondInput.value.match(/[a-z]+/)) {
        if (firstInput.value.match(/[0-9]+/)) {
          if (firstInput.value === secondInput.value) {
            secondError.innerHTML = `
            ✅ 
            <br> `;
            return true;
          } else {
            secondError.innerHTML = `
            ⚠️ Devem ser iguais
            <br> `;
          }
        } else {
          secondError.innerHTML = `
          ⚠️ Números
          <br>
          `;
        }
      } else {
        secondError.innerHTML = `
        ⚠️ Letras minúsculas
        <br>
        `;
      }
    } else {
      secondError.innerHTML = `
      ⚠️ Letras maiúsculas
      <br>
      `;
    }
  } else {
    secondError.innerHTML = `
    ⚠️ Mais de 6 dígitos
    <br>
    `;
  }
  return false;
}

function showHidePassword1() {
  var passwordInput = document.querySelector("#password1");
  const closedEye1 = document.querySelector(".icon1");

  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    closedEye1.classList.add("hide-pass");
  } else {
    passwordInput.type = "password";
    closedEye1.classList.remove("hide-pass");
  }
}

function showHidePassword2() {
  var passwordInput = document.querySelector("#password2");
  const closedEye1 = document.querySelector(".icon2");

  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    closedEye1.classList.add("hide-pass");
  } else {
    passwordInput.type = "password";
    closedEye1.classList.remove("hide-pass");
  }
}

function showFeedback(e) {
  e.preventDefault();
  if (testPassword1() && testPassword2() && comparePasswords()) {
    fetch("https://rdstation-signup-psel.herokuas.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => res.json())
      .then(() => {
        form.innerHTML = `
    <article> 
      <p> 
      Obrigado! Entraremos em contato. 😊
      </p>
    </article> 
  `;
      })
      .catch((error) => {
        form.innerHTML = `
        <article> 
          <p> 
          Não foi possível enviar o formulário, tente novamente mais tarde.
          </p>
        </article> 
      `;
      });
  }
}

const slideBtn1 = document.querySelector(".auto-btn1");
const slideBtn2 = document.querySelector(".auto-btn2");
const slideBtn3 = document.querySelector(".auto-btn3");
const slideBtn4 = document.querySelector(".auto-btn4");
const slideBtn5 = document.querySelector(".auto-btn5");
const slideBtn6 = document.querySelector(".auto-btn6");
const slider = document.querySelector(".slider");

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");
const card6 = document.querySelector(".card6");
card1.addEventListener("click", slide2);
card2.addEventListener("click", slide3);
card3.addEventListener("click", slide4);
card4.addEventListener("click", slide5);
card5.addEventListener("click", slide6);
card6.addEventListener("click", slide1);

function slide1() {
  slider.style.transition = "transform 0.5s";
  slider.style.transform = "translateX(55em)";
  slideBtn1.classList.add("background-btn");
  slideBtn2.classList.remove("background-btn");
  slideBtn3.classList.remove("background-btn");
  slideBtn4.classList.remove("background-btn");
  slideBtn5.classList.remove("background-btn");
  slideBtn6.classList.remove("background-btn");
}

function slide2() {
  slider.style.transition = "transform 0.5s";
  slider.style.transform = "translateX(33em)";
  slideBtn2.classList.add("background-btn");
  slideBtn1.classList.remove("background-btn");
  slideBtn3.classList.remove("background-btn");
  slideBtn4.classList.remove("background-btn");
  slideBtn5.classList.remove("background-btn");
  slideBtn6.classList.remove("background-btn");
}

function slide3() {
  slider.style.transition = "transform 0.5s";
  slider.style.transform = "translateX(11em)";
  slideBtn3.classList.add("background-btn");
  slideBtn1.classList.remove("background-btn");
  slideBtn2.classList.remove("background-btn");
  slideBtn4.classList.remove("background-btn");
  slideBtn5.classList.remove("background-btn");
  slideBtn6.classList.remove("background-btn");
}

function slide4() {
  slider.style.transition = "transform 0.5s";
  slider.style.transform = "translateX(-11em)";
  slideBtn4.classList.add("background-btn");
  slideBtn1.classList.remove("background-btn");
  slideBtn2.classList.remove("background-btn");
  slideBtn3.classList.remove("background-btn");
  slideBtn5.classList.remove("background-btn");
  slideBtn6.classList.remove("background-btn");
}

function slide5() {
  slider.style.transition = "transform 0.5s";
  slider.style.transform = "translateX(-33em)";
  slideBtn5.classList.add("background-btn");
  slideBtn1.classList.remove("background-btn");
  slideBtn2.classList.remove("background-btn");
  slideBtn3.classList.remove("background-btn");
  slideBtn4.classList.remove("background-btn");
  slideBtn6.classList.remove("background-btn");
}

function slide6() {
  slider.style.transition = "transform 0.5s";
  slider.style.transform = "translateX(-55em)";
  slideBtn6.classList.add("background-btn");
  slideBtn1.classList.remove("background-btn");
  slideBtn2.classList.remove("background-btn");
  slideBtn3.classList.remove("background-btn");
  slideBtn4.classList.remove("background-btn");
  slideBtn5.classList.remove("background-btn");
}

slideBtn1.addEventListener("click", slide1);
slideBtn2.addEventListener("click", slide2);
slideBtn3.addEventListener("click", slide3);
slideBtn4.addEventListener("click", slide4);
slideBtn5.addEventListener("click", slide5);
slideBtn6.addEventListener("click", slide6);
