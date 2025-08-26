import { DEFAULT_COUNT_MOVIES } from "@constants/Config";
import ContainerGenerator from "@utils/containerGenerator";
import PaginationItem from "./PaginationItem";

export default class Pagination {
  constructor(containerSelector, className = "pagination") {
    this.container = document.querySelector(containerSelector);
    this.className = className;
    this.element = null;
  }

  render(moviesCount) {
    this.element = ContainerGenerator.generateContainer("div", this.className);

    this.container.append(this.element);

    this.renderItems(moviesCount);
  }

  renderItems(moviesCount) {
    const pagesCount = this.calculatePagesCount(moviesCount);
    for (let i = 1; i <= pagesCount; i++) {
      const paginationItem = new PaginationItem(`.${this.className}`);
      paginationItem.render(i);
    }
  }

  calculatePagesCount(moviesCount) {
    const pagesCount = Math.ceil(moviesCount / DEFAULT_COUNT_MOVIES);

    return pagesCount;
  }
}
