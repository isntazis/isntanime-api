import { anime } from "@drizzle/schema";
import { db } from "@drizzle/db"
import { eq } from "drizzle-orm";

export const findAnimes = async () => {
  const animes = await db.select().from(anime)
  return animes;
}

export const findAnimeById = async (animeId: string | number) => {
  const animeById = await db.select().from(anime).where(eq(anime.id, animeId as number));
  return animeById;
}

export const findAnimeByTitle = async (animeTitle: string) => {
  const animeByTitle = await db.select().from(anime).where(eq(anime.title, animeTitle));
  return animeByTitle;
}

export const findAnimeWithLimit = async (limitCount: number) => {
  const animeWithLimit = await db.query.anime.findMany({
    limit: limitCount
  })
  return animeWithLimit;
}
