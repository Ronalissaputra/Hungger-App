export default class navBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <div class="box-nav">
                <h3 class="logo">Hunger App</h3>
                  <nav id="navbar">
                    <ul id="ul">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="https://github.com/ronalissaputra" target="_blank">About Us</a></li>
                    </ul>
                </nav>
                <a id="hamburger" href="#">☰</a>
            </div>
            `;
  }
}
// <h1 class="logo">Hungger App</h1>

customElements.define("nav-bar", navBar);
