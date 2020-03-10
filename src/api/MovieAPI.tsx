import { MovieSearchResult } from "../typings/types";

export class MovieAPI {
  private static BASE_URL = "https://api.themoviedb.org/4/";

  static async searchMovies(term: string): Promise<MovieSearchResult> {
    const url = `${this.BASE_URL}search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${term}`;
    const result = await fetch(url, {
      method: "GET"
    });
    const json = await result.json();
    return {
      total: json.total_results,
      items: json.results
    };
  }
}
