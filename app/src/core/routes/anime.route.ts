import { Router } from "express";
import { getAnimes, getAnimeById } from "@core/controllers/anime.controller";

const router = Router();

router.get('/anime', getAnimes);
router.get('/anime/:id', getAnimeById);

export default router;
