export interface IServiceCollection {
  addSingleton(service: string, implementation?: object, args?: string[]): void;
  addTransient(service: string, implementation?: object, args?: string[]): void;
  get<TService>(service: string): TService;
}
