import * as pg from "drizzle-orm/pg-core";

// custom type
interface Author {
  name: string | string[];
  profession: string[];
}

interface Studio {
  name: string;
}

interface Genre {
  [key: string]: string;
}

// initialize table model
export const anime = pg.pgTable("anime", {
  id: pg.serial().primaryKey(),
  title: pg.varchar().notNull(),
  description: pg.varchar().notNull(),
  image: pg.varchar().notNull().unique(),
  author: pg.json().$type<Author>().notNull(),
  studio: pg.json().$type<Studio>().notNull(),
  genre: pg.json().$type<Genre>().notNull(),
  original_run: pg.varchar().notNull(),
  episodes: pg.integer().notNull(),
  rating: pg.real().notNull()
});
