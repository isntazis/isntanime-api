import express from "express";
import { PORT } from "@config/env";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "@core/middlewares/errorHandler";
import animeRoute from "@core/routes/anime.route";

// instance express application and port variables .
export const app = express();
export const port = PORT;

// initialize middlewaress
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(morgan("dev"));

// initialize anime route
app.use('/api', animeRoute);

// initialize errorHandler middleware
app.use(errorHandler);
