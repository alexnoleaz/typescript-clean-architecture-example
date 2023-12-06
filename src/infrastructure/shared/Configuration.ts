import conf from 'config';
import { Vars } from './ConfigurationTypes';

export class Configuration {
  get<T>(value: Vars) {
    return conf.get<T>(value);
  }
  has(value: string) {
    return conf.has(value);
  }
}
