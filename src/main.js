import tampilMenu from "./utils/tampilMenu.js";

const boxCard = document.getElementById("boxCard");

const run = () => {
  fetch("./data/DATA.json")
    .then((response) => response.json())
    .then((data) => {
      const menu = data.restaurants;
      let card = "";
      menu.forEach((menus) => (card += tampilMenu(menus)));
      boxCard.innerHTML = card;
    });
};

export default run;
