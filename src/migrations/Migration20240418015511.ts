import { Migration } from '@mikro-orm/migrations';

export class Migration20240418015511 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" add column "role" varchar(255) null;');
    this.addSql('alter table "users" alter column "no_telephone" type varchar(255) using ("no_telephone"::varchar(255));');
    this.addSql('alter table "users" alter column "no_telephone" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" drop column "role";');

    this.addSql('alter table "users" alter column "no_telephone" type varchar(255) using ("no_telephone"::varchar(255));');
    this.addSql('alter table "users" alter column "no_telephone" set not null;');
  }

}
