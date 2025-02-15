import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "./db/schema/users";

export const db = drizzle(process.env.DATABASE_URL!);
