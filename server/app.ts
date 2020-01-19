import express, { Application, Request, Response } from 'express';
import MoviesController from './contollers/movies-controller';

export default class App {

  application: Application;

  constructor() {
    this.application = express();
    this.headers();
    this.middlewares();
    this.controllers();
    // this.unknownRoutes();
  }

  private headers() {
    this.application.disable('x-powered-by');
  }

  private middlewares() {
    this.application.use(express.json());
  }

  private controllers() {
    // const moviesController = new MoviesController();
    // this.application.use('/api/movies', moviesController.router);
    this.application.get('/', (_, res: Response) => {
      res.send('Hello TS Node.js!');
    })
  }

  private unknownRoutes() {
    this.application.get('*', (_, res: Response) => {
      res.redirect('/');
    });
  }

}
