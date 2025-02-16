import "dotenv/config";

export { users } from "./db/schema/auth/users";
export type { UserRow, UserInsert, UserUpdate } from "./db/schema/auth/users";

export { sessions } from "./db/schema/auth/sessions";
export type {
  SessionRow,
  SessionInsert,
  SessionUpdate,
} from "./db/schema/auth/sessions";

export { accounts } from "./db/schema/auth/accounts";
export type {
  AccountRow,
  AccountInsert,
  AccountUpdate,
} from "./db/schema/auth/accounts";

export { verifications } from "./db/schema/auth/verifications";
export type {
  VerificationRow,
  VerificationInsert,
  VerificationUpdate,
} from "./db/schema/auth/verifications";
