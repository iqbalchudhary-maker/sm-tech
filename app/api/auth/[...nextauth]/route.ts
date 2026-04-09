import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        // Skeleton only: validate with Prisma user table + password hashing.
        if (!credentials?.email || !credentials.password) return null;
        return {
          id: "placeholder-user-id",
          email: credentials.email,
          name: "Placeholder User",
          role: "DEVELOPER"
        } as never;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as { role?: string }).role ?? "DEVELOPER";
      return token;
    },
    async session({ session, token }) {
      (session.user as { role?: string }).role = token.role as string;
      return session;
    }
  },
  pages: {
    signIn: "/auth/login"
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
