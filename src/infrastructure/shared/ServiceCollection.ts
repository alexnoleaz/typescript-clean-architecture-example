import { ContainerBuilder, Definition } from 'node-dependency-injection';

export class ServiceCollection {
  private readonly container: ContainerBuilder;

  constructor() {
    this.container = new ContainerBuilder();
  }

  private register(service: string, implementation?: object, args?: string[]): Definition {
    return this.container.register(service, implementation, args);
  }

  addSingleton(service: string, implementation?: object, args?: string[]): void {
    this.register(service, implementation, args).shared = true;
  }

  addTransient(service: string, implementation?: object, args?: string[]): void {
    this.register(service, implementation, args).shared = false;
  }

  get<TService>(service: string): TService {
    return this.container.get<TService>(service);
  }
}
