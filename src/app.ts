/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as express from 'express';
import { Application } from 'express';

import { createServer, Server } from 'http';
import * as socketIo from 'socket.io';

class App {
  public app: Application;

  public port: number;

  public server?: Server;

  private io?: SocketIO.Server;

  constructor(appInit: { port: number; middleWares: any; routes: any }) {
    this.app = express.default();
    this.port = appInit.port;

    this.sockets();
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
    this.app.get('/', (req, res) => {
      return res.json({ message: 'hello world' });
    });
    this.app.use(routes);
  }

  private sockets(): void {
    this.server = createServer(this.app);
    this.io = socketIo.default(this.server);

    this.app.use((req, res, next) => {
      return next();
    });
  }

  public listen() {
    this.io.on('connection', (socket: any) => {
      socket.on('join', async (room: string) => {
        await socket.join(room);
        await this.io.in(room).emit('join room');
      });

      socket.on('chat message', (msgPayload: any) => {
        socket.to(msgPayload.roomId).emit('message', msgPayload.text);
      });
    });

    this.server.listen(this.port, () => {
      console.log(`App listening on: ${this.port}`);
    });
  }
}

export default App;
