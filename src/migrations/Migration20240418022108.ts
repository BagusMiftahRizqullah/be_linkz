import { Migration } from '@mikro-orm/migrations';

export class Migration20240418022108 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "auths" ("id" serial primary key, "created_at" date not null, "updated_at" date not null, "id_user" int null, "uid" varchar(255) null, "token" varchar(255) null, "role" varchar(255) null, "latest_login" timestamptz not null, "softdelete" timestamptz not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "auths" cascade;');
  }

}
