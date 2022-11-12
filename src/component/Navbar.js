export default class navBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <nav>
              <h1 class="logo">Hungger App</h1>
              <ul id="ul">
                <li><a href="/">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a href="https://github.com/ronalissaputra" target="_blank">About Us</a></li>
              </ul>
              <div class="hamburger">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
        `;
  }
}

customElements.define("nav-bar", navBar);
