import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import { Server as HttpServer } from 'http';

import { ServerOptions } from './rest/shared';

export class Server {
  private readonly port: number;
  private readonly express: Express;
  private http?: HttpServer;

  constructor(options: ServerOptions) {
    const { port = 3000, routes } = options;

    this.port = port;
    this.express = express();

    // Middlewares
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(helmet());

    // Routes
    this.express.use('/api', routes);
  }

  async start(): Promise<void> {
    return new Promise((resolve) => {
      this.http = this.express.listen(this.port, () => {
        console.log(`\n\tServer is running at http://localhost:${this.port}`);
        console.log('\tPress Ctrl-C to stop');
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.http) this.http.close((error) => (error ? reject(error) : resolve()));
      resolve();
    });
  }

  get httpServer() {
    return this.http;
  }
}
