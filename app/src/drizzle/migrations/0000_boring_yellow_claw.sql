CREATE TABLE IF NOT EXISTS "anime" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "anime_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"image" varchar NOT NULL,
	"author" json NOT NULL,
	"studio" json NOT NULL,
	"genre" json NOT NULL,
	"original_run" varchar NOT NULL,
	"episodes" integer NOT NULL,
	"rating" real NOT NULL,
	CONSTRAINT "anime_image_unique" UNIQUE("image")
);
