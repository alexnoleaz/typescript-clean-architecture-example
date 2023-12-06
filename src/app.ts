import 'dotenv/config';
import { Configuration } from './infrastructure/shared/Configuration';
import { Routes, Server } from './web-api';

(() => main())();

async function main() {
  const port = new Configuration().get<number>('port');
  const server = new Server({ routes: new Routes().get(), port });
  await server.start();
}
