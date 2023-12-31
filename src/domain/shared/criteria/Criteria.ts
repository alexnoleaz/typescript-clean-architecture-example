import { Filters } from './Filters';
import { Order } from './Order';

export class Criteria {
  readonly filters: Filters;
  readonly order: Order;
  readonly limit?: number;
  readonly offset?: number;

  constructor(filters: Filters, order: Order, limit?: number, offset?: number) {
    this.filters = filters;
    this.order = order;
    this.limit = limit;
    this.offset = offset;
  }

  hasFilters(): boolean {
    return this.filters.values.length > 0;
  }
}
