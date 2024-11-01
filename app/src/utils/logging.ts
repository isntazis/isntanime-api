import pino from "pino";
import pretty from "pino-pretty";

// initialize logging using pino.js
export const logging = pino(pretty({ colorize: true }));
