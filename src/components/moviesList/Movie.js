import ContainerGenerator from "@utils/containerGenerator";
import { eventBus } from "@utils/eventBus";

export default class Movie {
  constructor(containerSelector, className = "movie") {
    this.container = document.querySelector(containerSelector);
    this.className = className;
    this.element = null;
  }

  render(movie) {
    this.element = ContainerGenerator.generateContainer(
      "div",
      this.className,
      this.generateHTML(movie)
    );

    this.setupEventListeners(movie);

    this.container.append(this.element);
  }

  generateHTML(movie) {
    return `
      <img class="${this.className}__image" src=${movie.Poster} alt="movie poster" />

      <div class="${this.className}__content">
        <div class="${this.className}__rating">
          Rating: <span>⭐ ${movie.imdbRating}</span>
        </div>

        <tr>

        <div class="${this.className}__description">
          <h3 class="${this.className}__title">${movie.Title}</h3>
          <div class="${this.className}__year">Year: ${movie.Year}</div>
        </div>
      </div>
    `;
  }

  setupEventListeners(movie) {
    this.element.addEventListener("click", () => {
      eventBus.emit("open-details", movie);
    });
  }
}
