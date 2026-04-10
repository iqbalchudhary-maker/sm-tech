import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export type Role = "ADMIN" | "DEVELOPER";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        return {
          id: "placeholder-user-id",
          email: credentials.email,
          name: "Placeholder User",
          role: "DEVELOPER"
        } as any;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role ?? "DEVELOPER";
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/login"
  }
};

export async function getSessionRole(): Promise<Role | null> {
  const cookieStore = await cookies();
  const role = cookieStore.get("sm_role")?.value;
  if (role === "ADMIN" || role === "DEVELOPER") return role;
  return null;
}