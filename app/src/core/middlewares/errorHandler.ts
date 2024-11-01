import * as express from "express";
import { HttpExceptions } from "@http/HttpExceptions";

export function errorHandler(err: HttpExceptions, req: express.Request, res: express.Response, next: express.NextFunction) {
  if (err instanceof HttpExceptions) {
    const { status, message, context } = err;

    return res.status(status).json({ errors: { status, message, context } });
  }
  res.status(500).json({ status: 500, message: "There's something error has been occured." });
  next();
}
