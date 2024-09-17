import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { sampleUnauthorizedEmail } from "./sample-unauthorized-email";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
    error: "/auth/unauthorized",
    signOut: "/auth/signin",
  },
  callbacks: {
    /**
     * Checks if the user's email is in the list of allowed test users.
     * If it is, allows sign-in. Otherwise, denies sign-in.
     * @param user - The user object containing the user's email.
     * @returns A boolean indicating whether sign-in is allowed or not.
     */
    async signIn({ user }) {
      // Check if the user's email is in the list of allowed test users
      if (user.email && !sampleUnauthorizedEmail.includes(user.email)) {
        return true; // Allow sign-in
      } else {
        return false; // Deny sign-in
      }
    },
    /**
     * Updates the token object with the user data from the session or user.
     *
     * If the `trigger` is `"update"` and the `session` is provided,
     * it merges the `session.user` with the `token`.
     * Otherwise, it merges the `user` with the `token`.
     *
     * @param {{ token: Session, trigger: string, session: Session, user: User }} param0
     * @returns {Session} The updated token object.
     */
    async jwt({ token, trigger, session, user }) {
      if (trigger === "update" && session) {
        return { ...token, ...session?.user };
      }

      return { ...token, ...user };
    },
    /**
     * Updates the session object with the user data from the token.
     * @param {{ session: Session, token: Session, user: User }} param0
     * @returns {Session} The updated session object.
     */
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
