import { Router, Request, Response } from 'express';
const r = Router();

export class MoviesController {

  router: any;

  constructor() {
    this.router = Router();
    this.movies();
  }

  movies() {
    r.get('/api/movies', (req: Request, res: Response) => {
      res.status(200).json({
        id: 1,
        title: 'Iron Man',
        release: 2008,
        category: 'action'
      });
    });
  }

}

export default r;