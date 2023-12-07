import conf from 'config';
import { Parameter } from './Parameter';

export class Configuration {
  get<T>(value: Parameter): T {
    return conf.get<T>(value);
  }
  has(value: string): boolean {
    return conf.has(value);
  }
}
