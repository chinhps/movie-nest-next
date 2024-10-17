import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1729133614071 implements MigrationInterface {
    name = ' $npmConfigName1729133614071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_status_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`CREATE TYPE "public"."user_login_type_enum" AS ENUM('account', 'facebook', 'google')`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'user')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "provider_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "status" "public"."user_status_enum" NOT NULL DEFAULT 'active', "level" integer NOT NULL, "login_type" "public"."user_login_type_enum" NOT NULL DEFAULT 'account', "role" "public"."user_role_enum" NOT NULL DEFAULT 'user', "block" smallint NOT NULL DEFAULT '0', "avatar_url" character varying NOT NULL, CONSTRAINT "PK_d73958297163959818003b234c7" PRIMARY KEY ("id", "provider_id", "email", "username"))`);
        await queryRunner.query(`CREATE TYPE "public"."movie_status_enum" AS ENUM('on', 'off')`);
        await queryRunner.query(`CREATE TABLE "movie" ("id" SERIAL NOT NULL, "movie_name" character varying NOT NULL, "movie_name_other" character varying NOT NULL, "release" character varying NOT NULL, "status" "public"."movie_status_enum" NOT NULL DEFAULT 'off', "banner_image" character varying NOT NULL, "movie_image" character varying NOT NULL, "description" character varying NOT NULL, "parent_id" integer NOT NULL, "views" integer NOT NULL, "slug" character varying NOT NULL, "episodes_counter" integer NOT NULL, CONSTRAINT "PK_f6e59cbc9679a179d1754448ab5" PRIMARY KEY ("id", "slug"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movie"`);
        await queryRunner.query(`DROP TYPE "public"."movie_status_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TYPE "public"."user_login_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."user_status_enum"`);
    }

}
