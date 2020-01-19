import App from './app';

class Server {

  private port: string | number;
  private app: any;

  private main() {
    this.app = new App();  
  }

  constructor() {
    this.port = process.env.PORT || 3000;    
    this.main();
    this.start();
  }

   private start() {
    this.app.application.listen(this.port, () => 
      console.log(`Server started on port ${this.port}`)
    );
  }

}

new Server();
