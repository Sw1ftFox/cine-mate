import { popularMovieIDs } from "@constants/Config";

export default class ApiService {
  async fetchMovies() {
    try {
      const promises = popularMovieIDs.map((id) => this.fetchMovie(id));
      const movies = await Promise.all(promises);

      return movies;
    } catch (err) {
      console.error(err.message);
    }
  }

  async fetchMovie(id) {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${id}&apikey=295a8d47`
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const movie = await response.json();

      if (!movie) {
        throw new Error("Movie not found");
      }

      return movie;
    } catch (err) {
      throw err;
    }
  }
}
