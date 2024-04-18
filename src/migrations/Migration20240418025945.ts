import { Migration } from '@mikro-orm/migrations';

export class Migration20240418025945 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "auths" alter column "latest_login" type date using ("latest_login"::date);');
    this.addSql('alter table "auths" alter column "softdelete" type date using ("softdelete"::date);');
    this.addSql('alter table "auths" alter column "softdelete" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "auths" alter column "latest_login" type timestamptz using ("latest_login"::timestamptz);');
    this.addSql('alter table "auths" alter column "softdelete" type timestamptz using ("softdelete"::timestamptz);');
    this.addSql('alter table "auths" alter column "softdelete" set not null;');
  }

}
