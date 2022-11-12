const tampilMenu = (menus) => {
  return `
        <div class="card">
          <h3>${menus.city}</h3>
          <img src="${menus.pictureId}" alt="">
          <h4>Rating : ${menus.rating}</h4>
          <p>Nama : ${menus.name}</p>
          <p>
            ${menus.description}
          </p>
        </div>
    `;
};

module.exports = tampilMenu;
