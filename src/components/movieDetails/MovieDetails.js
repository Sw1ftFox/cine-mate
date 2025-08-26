import ContainerGenerator from "@utils/containerGenerator";
import { eventBus } from "@utils/eventBus";

export default class MovieDetails {
  constructor(containerSelector, className = "details") {
    this.container = document.querySelector(containerSelector);
    this.className = className;
    this.element = null;
    this.movie = null;

    this.setupEvents();
  }

  render() {
    this.container.innerHTML = "";

    this.element = ContainerGenerator.generateContainer(
      "main",
      this.className,
      this.generateHTML()
    );

    this.container.append(this.element);
  }

  generateHTML() {
    if (!this.movie) {
      return `
        <h3 class="skeleton__title"></h3>
        <div class="skeleton__information"></div>
        <div class="skeleton__group"></div>
        <div class="skeleton__plot"></div>`;
    } else {
      return `
        <h3 class="${this.className}__title">${this.movie.Title}</h3>
        <div class="${this.className}__information">
          <div class="${this.className}__rating">⭐ ${this.movie.imdbRating}</div>
          <div class="${this.className}__year">${this.movie.Year}</div>
          <div class="${this.className}__duration">${this.movie.Runtime}</div>
          <div class="${this.className}__genre">${this.movie.Genre}</div>
        </div>
        <div class="${this.className}__group">        
          <div class="${this.className}__director">Director: ${this.movie.Director}</div>
          <div class="${this.className}__actors">Actors: ${this.movie.Actors}</div>
        </div>
        <div class="${this.className}__plot">Plot: ${this.movie.Plot}</div>
      `;
    }
  }

  setupEvents() {
    eventBus.on("open-details", (movie) => {
      this.movie = movie;
      this.render();
    });
  }
}
