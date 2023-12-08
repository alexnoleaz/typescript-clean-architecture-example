import { AuditedEntity } from './AuditedEntity';

export abstract class FullAuditEntity extends AuditedEntity {
  isDelete: boolean;
  deletionTime?: Date;

  constructor(isDelete: boolean) {
    super();
    this.isDelete = isDelete;
  }
}
