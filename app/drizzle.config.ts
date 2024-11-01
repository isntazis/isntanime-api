import { DATABASE_URL } from "@/config/env";
import { defineConfig } from "drizzle-kit";

// configs for drizzle-kit/orm
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/drizzle/schema",
  out: "./src/drizzle/migrations",
  dbCredentials: {
    url: DATABASE_URL
  },
  strict: true,
  verbose: true
});
