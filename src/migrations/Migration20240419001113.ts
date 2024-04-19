import { Migration } from '@mikro-orm/migrations';

export class Migration20240419001113 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" alter column "deleted_at" type date using ("deleted_at"::date);');
    this.addSql('alter table "users" alter column "deleted_at" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" alter column "deleted_at" type date using ("deleted_at"::date);');
    this.addSql('alter table "users" alter column "deleted_at" set not null;');
  }

}
