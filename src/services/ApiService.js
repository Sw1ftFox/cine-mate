import { popularMovieIDs } from "@constants/Config";

const API_KEY = process.env.OMDB_API_KEY;
const API_URL = "https://www.omdbapi.com/";

export default class ApiService {
  constructor() {
    this.apiKey = API_KEY;
  }

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
        `${API_URL}?i=${id}&apikey=${this.apiKey}`
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
