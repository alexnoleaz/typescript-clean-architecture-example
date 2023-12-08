import { ArgumentError } from '../errors/ArgumentError';

type ValueType = string | number | boolean | Date | object;

export abstract class ValueObject<T extends ValueType> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
    this.validateValue(value);
  }

  private validateValue(value: T): void {
    if (value === null || value === undefined) throw new ArgumentError('Value must be defined.');
  }

  equals(obj: ValueObject<T>): boolean {
    return obj.constructor.name === this.constructor.name && obj.value === this.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
