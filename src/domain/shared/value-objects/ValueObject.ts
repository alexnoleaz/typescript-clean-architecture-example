import { InvalidArgumentError } from '../errors/InvalidArgumentError';

type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
    this.validateValue(value);
  }

  private validateValue(value: T): void {
    if (value === null || value === undefined) throw new InvalidArgumentError('Value must be defined');
  }

  equals(obj: ValueObject<T>): boolean {
    return obj.constructor.name === this.constructor.name && obj.value === this.value;
  }
}
