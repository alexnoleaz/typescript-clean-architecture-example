export interface IConfiguration {
  get<T>(value: string): T;
  has(value: string): boolean;
}
