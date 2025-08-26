import ContainerGenerator from "@utils/containerGenerator";
import Movie from "./Movie";
import { eventBus } from "@utils/eventBus";
import { DEFAULT_COUNT_MOVIES } from "@constants/Config";

export default class MoviesList {
  constructor(containerSelector, className = "movies") {
    this.container = document.querySelector(containerSelector);
    this.className = className;
    this.element = null;

    this.setupEvents();
  }

  render(movies) {
    this.movies = movies;

    this.element = ContainerGenerator.generateContainer("main", this.className);

    this.container.append(this.element);

    movies.map((movieData, index) => {
      if (index < DEFAULT_COUNT_MOVIES) {
        const movieElement = new Movie(`.${this.className}`);
        return movieElement.render(movieData);
      }
      return;
    });
  }

  update(pageNumber) {
    this.element.innerHTML = "";

    const firstIndex = DEFAULT_COUNT_MOVIES * (pageNumber - 1);
    const lastIndex = DEFAULT_COUNT_MOVIES * pageNumber;

    this.movies.map((movieData, index) => {
      if (index + 1 > firstIndex && index < lastIndex) {
        const movieElement = new Movie(`.${this.className}`);
        return movieElement.render(movieData);
      }
      return;
    });
  }

  setupEvents() {
    eventBus.on("select-page", ([event, pageNumber, updateCurrentPage]) => {
      this.update(pageNumber);
      updateCurrentPage(event, pageNumber);
    });

    
  }
}
