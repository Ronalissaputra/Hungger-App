const hamburgerButtonElement = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const main = document.getElementById("main");

hamburgerButtonElement.addEventListener("click", (event) => {
  navbar.classList.toggle("open");
  event.stopPropagation();
});

main.addEventListener("click", (event) => {
  navbar.classList.remove("open");
  event.stopPropagation();
});
