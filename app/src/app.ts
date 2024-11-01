import express from "express";
import { PORT } from "@config/env";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

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
