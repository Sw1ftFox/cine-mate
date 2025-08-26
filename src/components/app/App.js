import Header from "@components/header/Header";
import MovieDetails from "@components/movieDetails/MovieDetails";
import MoviesList from "@components/moviesList/MoviesList";
import Pagination from "@components/pagination/Pagination";
import ApiService from "@services/ApiService";

class App {
  constructor() {
    this.apiService = new ApiService();
    this.movies = [];

    this.header = new Header("#header-container");
    this.moviesList = new MoviesList("#movies-container");
    this.details = new MovieDetails("#details-container");
    this.pagination = new Pagination("#pagination-container");
  }

  init() {
    this.loadMovies();
  }

  render() {
    this.header.render();
    this.moviesList.render(this.movies);
    this.details.render();
    this.pagination.render(this.movies.length);
  }

  async loadMovies() {
    try {
      this.movies = await this.apiService.fetchMovies();
      console.log(this.movies);

      this.render();
    } catch (err) {}
  }
}

export const app = new App();
