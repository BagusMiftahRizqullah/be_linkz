import { Migration } from '@mikro-orm/migrations';

export class Migration20240419004747 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "auths" rename column "softdelete" to "deleted_at";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "auths" rename column "deleted_at" to "softdelete";');
  }

}
