import { Migration } from '@mikro-orm/migrations';

export class Migration20240418030602 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" add column "status" varchar(255) null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" drop column "status";');
  }

}
