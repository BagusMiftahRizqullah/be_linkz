import { Migration } from '@mikro-orm/migrations';

export class Migration20240419004917 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" alter column "deleted_at" type date using ("deleted_at"::date);');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" alter column "deleted_at" type varchar(255) using ("deleted_at"::varchar(255));');
  }

}
