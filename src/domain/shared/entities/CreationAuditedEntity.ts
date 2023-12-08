export abstract class CreationAuditedEntity {
  readonly creationTime: Date;

  constructor() {
    this.creationTime = new Date();
  }
}
