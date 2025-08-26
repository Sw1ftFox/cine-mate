import Search from "@components/search/Search";
import ContainerGenerator from "@utils/containerGenerator";

export default class Header {
  constructor(containerSelector, className = "header") {
    this.container = document.querySelector(containerSelector);
    this.className = className;
    this.element = null;
  }

  render() {
    this.element = ContainerGenerator.generateContainer(
      "header",
      this.className,
      this.generateHTML()
    );

    this.container.append(this.element);

    const search = new Search(this.className, `${this.className}__search`);
    search.render();
  }

  generateHTML() {
    return `
      <h1 class="${this.className}__title">Cine Mate</h1>
    `;
  }
}
