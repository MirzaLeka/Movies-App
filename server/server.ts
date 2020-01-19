import App from './app';
import Sealed from './decorators/sealed';

@Sealed
class Server {

  private port: string | number;
  private app: any;

  private main() {
    this.app = new App();  
  }

  constructor() {
    this.port = process.env.PORT || 3000;    
    this.main();
  }

   listen() {
    this.app.application.listen(this.port, () => 
      console.log(`Server started on port ${this.port}`)
    );
  }

}

new Server().listen();
