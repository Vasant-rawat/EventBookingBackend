import { eq } from "drizzle-orm";
import { db } from "../../database";
import { userTable } from "../../database/schema/user";
export async function createUser(data: {name:string, email: string, password: string,}) {
  const [user] = await db.insert(userTable).values(data).returning();
  return user;
}

export async function findeUserByEmail(email: string) {
  const [user]= await db.select().from(userTable).where(eq(userTable.email,email))
  return user;
}
