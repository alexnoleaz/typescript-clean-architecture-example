import { ArgumentError } from '../errors/ArgumentError';
import { Field } from './Field';
import { Operator } from './Operator';
import { Value } from './Value';

export class Filter {
  readonly field: Field;
  readonly operator: Operator;
  readonly value: Value;

  static fromValues(filter: Map<string, string>): Filter {
    const field = filter.get('field');
    const operator = filter.get('operator');
    const value = filter.get('value');

    if (!field || !operator || !value) throw new ArgumentError('The filter is invalid.');

    return new Filter(new Field(field), Operator.fromValue(operator), new Value(value));
  }

  constructor(field: Field, operator: Operator, value: Value) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }
}
