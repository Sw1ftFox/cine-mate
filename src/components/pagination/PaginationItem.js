import ContainerGenerator from "@utils/containerGenerator";
import { eventBus } from "@utils/eventBus";

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

    this.element.dataset.page = pageNumber;

    this.setupEventListeners(pageNumber);

    this.container.append(this.element);
  }

  generateHTML(pageNumber) {
    return `
      <div class="${this.className}-number">${pageNumber}</div>
    `;
  }

  setupEventListeners(pageNumber) {
    this.element.addEventListener("click", () => {
      eventBus.emit("select-page", pageNumber);
    });
  }
}
