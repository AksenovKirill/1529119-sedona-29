const loginLink = document.querySelector(".checkhotel");
const loginPopup = document.querySelector(".modal-hotel");
const loginClose = document.querySelector(".checkhotel-close");
const loginForm = loginPopup.querySelector(".login-form");
const loginDateMove = loginPopup.querySelector(".date-move");
const loginDateOut = loginPopup.querySelector(".date-out");
const loginAdults = loginPopup.querySelector(".sum-a");
const loginChild = loginPopup.querySelector(".sum-c");
const loginSearch = loginPopup.querySelector(".button-search");

loginLink.addEventListener("click", function () {
    loginPopup.classList.add("modal-show");
});

  loginSearch.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

loginForm.addEventListener("submit", function (evt) {
    if (!loginDateMove.value || !loginAdults.value) {
      evt.preventDefault();
      loginPopup.classList.add("modal-error");
} else {
  localStorage.setItem("amounts", loginAdults.value, loginChild.value);
}
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (loginPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-show");
        loginPopup.classList.remove("modal-error");
      }
    }
  });

