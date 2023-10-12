import { MoviesService } from '../movie/movie.service';

import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('random')
  async getRandomMovies(@Res() res: Response) {
    try {
      const randomMovies = await this.moviesService.fetchRandomMovies();
      res.status(200).json({
        result: randomMovies,
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch random movies' });
    }
  }
}
