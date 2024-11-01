CREATE TABLE IF NOT EXISTS "anime" (
	"id" serial PRIMARY KEY NOT NULL,
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
