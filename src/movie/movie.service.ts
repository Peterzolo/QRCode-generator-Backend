// src/movies/movies.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoviesService {
  private movies: { title: string; image: string }[] = [];

  async fetchRandomMovies(): Promise<{ title: string; image: string }[]> {
    const apiKeyTest = process.env.TMDB_API_KEY;
    const randomMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKeyTest}&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1&vote_average.gte=7.5&vote_count.gte=100`;

    try {
      const response = await axios.get(randomMoviesURL);
      return response.data.results.slice(0, 10).map((movie) => ({
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));
    } catch (error) {
      throw new Error('Failed to fetch random movies');
    }
  }
}
