import { CreationAuditedEntity } from './CreationAuditedEntity';

export abstract class AuditedEntity extends CreationAuditedEntity {
  lastModificationTime?: Date;
}
