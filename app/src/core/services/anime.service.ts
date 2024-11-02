import { anime } from "@drizzle/schema";
import { db } from "@drizzle/db"
import { eq } from "drizzle-orm";
import { CreateAnimeDto } from "@isntanime-api/dtos";

export const findAnimes = async () => {
  const animes = await db.select().from(anime)
  return animes;
}

export const findAnimeById = async (animeId: number) => {
  const animeById = await db.select().from(anime).where(eq(anime.id, animeId));
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

export const insertAnime = async (animeData: CreateAnimeDto) => {
  const insertNewAnime = await db.insert(anime).values(animeData).returning();
  return insertNewAnime;
}

export const updateAnime = async (animeId: string | number, newAnimeData: CreateAnimeDto) => {
  const updateAnimeWithId = await db.update(anime).set(newAnimeData).where(eq(anime.id, animeId as number)).returning()
  return updateAnimeWithId;
}

export const dropAnime = async (animeId: string | number) => {
  const dropAnimeTableWithId = await db.delete(anime).where(eq(anime.id, animeId as number)).returning();
  return dropAnimeTableWithId;
}
