import { Migration } from '@mikro-orm/migrations';

export class Migration20240418005929 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" drop column "token";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" add column "token" varchar(255) null;');
  }

}
