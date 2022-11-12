const hamburger = document.querySelector(".hamburger input");
const nav = document.querySelector("#ul");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
