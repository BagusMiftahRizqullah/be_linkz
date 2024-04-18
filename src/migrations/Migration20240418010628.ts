import { Migration } from '@mikro-orm/migrations';

export class Migration20240418010628 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" alter column "no_telephone" type varchar(255) using ("no_telephone"::varchar(255));');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" alter column "no_telephone" type int using ("no_telephone"::int);');
  }

}
