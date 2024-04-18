import { Migration } from '@mikro-orm/migrations';

export class Migration20240418011232 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" alter column "no_telephone" type varchar(255) using ("no_telephone"::varchar(255));');
    this.addSql('alter table "users" alter column "no_telephone" set not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" alter column "no_telephone" type varchar(255) using ("no_telephone"::varchar(255));');
    this.addSql('alter table "users" alter column "no_telephone" drop not null;');
  }

}
