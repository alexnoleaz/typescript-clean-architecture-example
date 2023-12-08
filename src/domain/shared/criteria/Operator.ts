import { ArgumentError } from '../errors';

export class Operator {
  static readonly EQUAL = new Operator('=');
  static readonly NOT_EQUAL = new Operator('!=');
  static readonly GT = new Operator('>');
  static readonly LT = new Operator('<');
  static readonly CONTAINS = new Operator('CONTAINS');
  static readonly NOT_CONTAINS = new Operator('NOT_CONTAINS');

  readonly value: string;

  static fromValue(operator: string): Operator {
    switch (operator) {
      case '=':
        return Operator.EQUAL;
      case '!=':
        return Operator.NOT_EQUAL;
      case '>':
        return Operator.GT;
      case '<':
        return Operator.LT;
      case 'CONTAINS':
        return Operator.CONTAINS;
      case 'NOT_CONTAINS':
        return Operator.NOT_CONTAINS;
      default:
        throw new ArgumentError(`This operator <${operator}> is invalid.`);
    }
  }

  private constructor(value: string) {
    this.value = value;
  }
}
