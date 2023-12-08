import { ArgumentError } from '../errors/ArgumentError';

export class OrderType {
  static readonly ASC = new OrderType('asc');
  static readonly DESC = new OrderType('desc');
  static readonly NONE = new OrderType('none');

  readonly value: string;

  static fromValue(orderType: string): OrderType {
    switch (orderType) {
      case 'asc':
        return OrderType.ASC;
      case 'desc':
        return OrderType.DESC;
      case 'none':
        return OrderType.NONE;
      default:
        throw new ArgumentError(`This order type <${orderType}> is invalid.`);
    }
  }

  private constructor(value: string) {
    this.value = value;
  }

  isAsc(): boolean {
    return this.value == OrderType.ASC.value;
  }

  isNone(): boolean {
    return this.value == OrderType.NONE.value;
  }
}
