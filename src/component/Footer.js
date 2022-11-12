export default class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <footer>
            <p>copyright &copy; Hunger App</p>
        </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
