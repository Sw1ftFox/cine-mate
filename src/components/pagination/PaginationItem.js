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
    this.element.addEventListener("click", (event) => {
      eventBus.emit("select-page", [event, pageNumber, this.updateCurrentPage]);
    });
  }

  updateCurrentPage(event, pageNumber) {
      const target = event.target;
      const pagination = target.closest(".pagination");
      const paginationItems = pagination.querySelectorAll("[data-page]");

      paginationItems.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }

        if (+item.dataset.page === pageNumber) {
          item.classList.add("active");
        }
      });
    }
}
