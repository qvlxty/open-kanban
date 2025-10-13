import { Migration } from '@mikro-orm/migrations';

export class Migration20251013211712 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "project" ("id" serial primary key, "title" varchar(255) not null);`);

    this.addSql(`create table "stage" ("id" serial primary key, "title" varchar(255) not null, "description" text not null, "created_date_at" timestamptz not null default CURRENT_TIMESTAMP, "update_date" timestamptz not null default CURRENT_TIMESTAMP, "project_id" int not null);`);

    this.addSql(`create table "user" ("id" serial primary key, "login" varchar(255) not null, "name" varchar(255) not null, "password" varchar(255) not null);`);

    this.addSql(`create table "task" ("id" serial primary key, "title" varchar(255) not null, "description" text null, "due_date" timestamptz null, "order" int null default 0, "created_date_at" timestamptz not null default CURRENT_TIMESTAMP, "update_date" timestamptz not null default CURRENT_TIMESTAMP, "stage_id" int not null, "user_id" int not null);`);

    this.addSql(`create table "task_assigned" ("task_id" int not null, "user_id" int not null, constraint "task_assigned_pkey" primary key ("task_id", "user_id"));`);

    this.addSql(`alter table "stage" add constraint "stage_project_id_foreign" foreign key ("project_id") references "project" ("id") on update cascade;`);

    this.addSql(`alter table "task" add constraint "task_stage_id_foreign" foreign key ("stage_id") references "stage" ("id") on update cascade;`);
    this.addSql(`alter table "task" add constraint "task_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;`);

    this.addSql(`alter table "task_assigned" add constraint "task_assigned_task_id_foreign" foreign key ("task_id") references "task" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "task_assigned" add constraint "task_assigned_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade on delete cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "stage" drop constraint "stage_project_id_foreign";`);

    this.addSql(`alter table "task" drop constraint "task_stage_id_foreign";`);

    this.addSql(`alter table "task" drop constraint "task_user_id_foreign";`);

    this.addSql(`alter table "task_assigned" drop constraint "task_assigned_user_id_foreign";`);

    this.addSql(`alter table "task_assigned" drop constraint "task_assigned_task_id_foreign";`);

    this.addSql(`drop table if exists "project" cascade;`);

    this.addSql(`drop table if exists "stage" cascade;`);

    this.addSql(`drop table if exists "user" cascade;`);

    this.addSql(`drop table if exists "task" cascade;`);

    this.addSql(`drop table if exists "task_assigned" cascade;`);
  }

}
