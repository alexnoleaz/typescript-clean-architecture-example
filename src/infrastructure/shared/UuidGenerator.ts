import { v4 as uuid } from 'uuid';
import { IUuidGenerator } from '../../domain/shared/IUuidGenerator';

export class UuidGenerator implements IUuidGenerator {
  generate(): string {
    return uuid();
  }
}
