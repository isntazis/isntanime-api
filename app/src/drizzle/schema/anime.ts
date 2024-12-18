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
  name: string[];
}

// initialize table model
export const anime = pg.pgTable("anime", {
  id: pg.integer().primaryKey().generatedAlwaysAsIdentity().notNull(),
  title: pg.varchar().notNull(),
  description: pg.varchar().notNull(),
  image: pg.varchar().unique().notNull(),
  author: pg.json().$type<Author>().notNull(),
  studio: pg.json().$type<Studio>().notNull(),
  genre: pg.json().$type<Genre>().notNull(),
  original_run: pg.varchar().notNull(),
  episodes: pg.integer().notNull(),
  rating: pg.real().notNull()
});
