import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(process.env.DATABASE_URL!);

export { users } from "./db/schema/users";
export type { UserRow, UserInsert, UserUpdate } from "./db/schema/users";

export { sessions } from "./db/schema/sessions";
export type {
  SessionRow,
  SessionInsert,
  SessionUpdate,
} from "./db/schema/sessions";

export { accounts } from "./db/schema/accounts";
export type {
  AccountRow,
  AccountInsert,
  AccountUpdate,
} from "./db/schema/accounts";

export { verifications } from "./db/schema/verifications";
export type {
  VerificationRow,
  VerificationInsert,
  VerificationUpdate,
} from "./db/schema/verifications";
