import { Filter } from './Filter';

export class Filters {
  readonly values: Filter[];

  static fromValues(filters: Map<string, string>[]): Filters {
    return new Filters(filters.map(Filter.fromValues));
  }

  static none(): Filters {
    return new Filters([]);
  }

  constructor(filters: Filter[]) {
    this.values = filters;
  }
}
