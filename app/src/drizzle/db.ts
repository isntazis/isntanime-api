import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { DATABASE_URL } from "@config/env";
import * as schema from "@drizzle/schema/index";

// new pool client connection
const clientPool = new Pool({
  connectionString: DATABASE_URL
});

// add the client to drizzle instance and add schemas
export const db = drizzle({ client: clientPool, schema });
