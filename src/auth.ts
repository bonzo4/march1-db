import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from ".";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql"
    // schema: {
    //   ...schema,
    //   user: schema.users,
    // },
    //if all of them are just using plural form, you can just pass the option below
    usePlural: true,
  }),
});
