import { ArgumentError } from '../errors/ArgumentError';
import { ValueObject } from './ValueObject';

export abstract class Identifier extends ValueObject<string> {
  private readonly pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  constructor(value: string) {
    super(value);
    this.validateUuid(value);
  }

  private validateUuid(value: string): void {
    if (!this.pattern.test(value))
      throw new ArgumentError(`<${this.constructor.name}> does not allow the value <${value}> `);
  }
}
