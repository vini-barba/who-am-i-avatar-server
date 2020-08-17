/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as express from 'express';
import { Application } from 'express';

class App {
  public app: Application;

  public port: number;

  constructor(appInit: { port: number; middleWares: any; routes: any }) {
    this.app = express.default();
    this.port = appInit.port;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.routes);
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(routes: any) {
    this.app.use(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on: ${this.port}`);
    });
  }
}

export default App;
