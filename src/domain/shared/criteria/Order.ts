import { Field } from './Field';
import { OrderType } from './OrderType';

export class Order {
  readonly orderBy: Field;
  readonly orderType: OrderType;

  static fromValues(orderBy?: string, orderType?: string): Order {
    if (!orderBy) return Order.none();

    return new Order(new Field(orderBy), OrderType.fromValue(orderType || OrderType.ASC.value));
  }

  static asc(orderBy: string): Order {
    return new Order(new Field(orderBy), OrderType.ASC);
  }

  static desc(orderBy: string): Order {
    return new Order(new Field(orderBy), OrderType.DESC);
  }

  static none(): Order {
    return new Order(new Field(''), OrderType.NONE);
  }

  constructor(orderBy: Field, orderType: OrderType) {
    this.orderBy = orderBy;
    this.orderType = orderType;
  }

  hasOrder(): boolean {
    return !this.orderType.isNone();
  }
}
