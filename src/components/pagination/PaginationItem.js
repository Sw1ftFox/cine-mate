import ContainerGenerator from "@utils/containerGenerator";

export default class PaginationItem {
  constructor(containerSelector, className = "pagination__item") {
    this.container = document.querySelector(containerSelector);
    this.className = className;
    this.element = null;
  }

  render(pageNumber) {
    this.element = ContainerGenerator.generateContainer(
      "div",
      this.className,
      this.generateHTML(pageNumber)
    );

    this.container.append(this.element);
  }

  generateHTML(pageNumber) {
    return `
      <div class="${this.className}-number">${pageNumber}</div>
    `;
  }
}
