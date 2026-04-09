import { cookies } from "next/headers";

export type Role = "ADMIN" | "DEVELOPER";

export async function getSessionRole(): Promise<Role | null> {
  // Skeleton: Replace with NextAuth/Clerk session resolution.
  const cookieStore = await cookies();
  const role = cookieStore.get("sm_role")?.value;
  if (role === "ADMIN" || role === "DEVELOPER") return role;
  return null;
}
