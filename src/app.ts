import 'dotenv/config';
import { Configuration } from './infrastructure/shared/config/Configuration';
import { Routes, Server } from './web-api';

((): Promise<void> => main())();

async function main(): Promise<void> {
  const port = new Configuration().get<number>('port');
  const server = new Server({ routes: new Routes().get(), port });
  await server.start();
}
