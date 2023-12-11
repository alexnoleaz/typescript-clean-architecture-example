import 'dotenv/config';
import { Configuration, ServiceCollection } from './infrastructure/shared';
import { Routes, Server } from './web-api';

((): Promise<void> => main())();

async function main(): Promise<void> {
  const [services, configuration] = startup();
  const server = new Server(new Routes().get(), services, configuration);
  await server.start();
}

function startup(): [ServiceCollection, Configuration] {
  const serviceCollection = new ServiceCollection();
  serviceCollection.addSingleton('IConfiguration', Configuration);

  const configuration = serviceCollection.get<Configuration>('IConfiguration');
  return [serviceCollection, configuration];
}
