import { v4 as uuid } from 'uuid';
import { IUuidGenerator } from '../../domain/shared';

export class UuidGenerator implements IUuidGenerator {
  generate(): string {
    return uuid();
  }
}
