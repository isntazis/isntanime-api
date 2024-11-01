import { anime } from "../../../app/src/drizzle/schema/anime";

export type CreateAnimeDto = typeof anime.$inferInsert;
export type GetAnimeDto = typeof anime.$inferSelect;
