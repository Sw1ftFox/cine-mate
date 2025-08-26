import ContainerGenerator from "@utils/containerGenerator";
import Movie from "./Movie";

export default class MoviesList {
  constructor(containerSelector, className = "movies") {
    this.container = document.querySelector(containerSelector);
    this.className = className;
    this.element = null;
  }

  render(movies) {
    this.element = ContainerGenerator.generateContainer("main", this.className);

    this.container.append(this.element);

    movies.map((movieData, index) => {
      const movieElement = new Movie(`.${this.className}`);
      return movieElement.render(movieData);
    });

  }
}
