import ContainerGenerator from "@utils/containerGenerator";
import { eventBus } from "@utils/eventBus";

export default class Search {
  constructor(containerSelector, className = "search") {
    this.container = document.querySelector(containerSelector);
    this.className = className;
    this.element = null;
  }

  render() {
    this.element = ContainerGenerator.generateContainer(
      "form",
      this.className,
      this.generateHTML()
    );

    this.setupEventListeners();

    this.container.append(this.element);
  }

  generateHTML() {
    return `
      <input type="text" name="movie-title" placeholder="Введите название фильма...">
    `;
  }

  setupEventListeners() {
    const input = this.element.querySelector("input");
    input.addEventListener("input", () => {
      eventBus.emit("search", input.value.toLowerCase());
    });
  }
}
