import conf from 'config';
import { IConfiguration } from '../../domain/shared';

export class Configuration implements IConfiguration {
  get<T>(value: string): T {
    return conf.get<T>(value);
  }
  has(value: string): boolean {
    return conf.has(value);
  }
}
