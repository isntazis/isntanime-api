import { Router } from "express";
import { getAnimes, getAnimeById, createAnime } from "@core/controllers/anime.controller";

const router = Router();

router.get('/anime', getAnimes);
router.get('/anime/:id', getAnimeById);
router.post('/anime', createAnime);

export default router;
