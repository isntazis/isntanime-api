import { config } from "dotenv";

// initialize environment config
config({ path: ".env" });

const NODE_ENV = process.env.NODE_ENV as string;
const PORT = Number(process.env.PORT);
const DATABASE_URL = process.env.DATABASE_URL as string;
const JWT_PRIVATE = process.env.JWT_PRIVATE as string;
const JWT_PUBLIC = process.env.JWT_PUBLIC as string;
const SALT = Number(process.env.SALT);

export { NODE_ENV, PORT, DATABASE_URL, JWT_PRIVATE, JWT_PUBLIC, SALT };
