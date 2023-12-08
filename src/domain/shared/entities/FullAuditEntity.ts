export abstract class FullAuditEntity {
  isDelete: boolean;
  deletionTime?: Date;

  constructor(isDelete: boolean) {
    this.isDelete = isDelete;
  }
}
