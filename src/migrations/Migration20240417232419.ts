import { Migration } from '@mikro-orm/migrations';

export class Migration20240417232419 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "users" ("id" serial primary key, "created_at" date not null, "updated_at" date not null, "name" varchar(255) null, "email" varchar(255) null, "password" varchar(255) not null, "age" int null, "no_telephone" int null, "token" varchar(255) null);');
    this.addSql('alter table "users" add constraint "users_name_unique" unique ("name");');
    this.addSql('alter table "users" add constraint "users_email_unique" unique ("email");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "users" cascade;');
  }

}
