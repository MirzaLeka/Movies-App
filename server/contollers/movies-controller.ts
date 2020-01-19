import { Router, Request, Response } from 'express';

export default class MoviesController {

  router: any;

  constructor() {
    this.router = Router();
    this.movies();
  }

  movies() {
    this.router.get('/api/movies', (req: Request, res: Response) => {
      res.status(200).json({
        id: 1,
        title: 'Iron Man',
        release: 2008,
        category: 'action'
      });
    });
  }

}

// export default router;