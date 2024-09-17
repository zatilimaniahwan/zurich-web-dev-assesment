import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
    error: "/auth/login",
    signOut: "/auth/signin",
  },
  callbacks: {
    /**
     * Checks if the user's email domain is authorized to sign in.
     *
     * The function takes the user object as an argument and returns a boolean
     * indicating whether the sign-in should be allowed or not.
     *
     * @param {{ email: string | undefined }} user - The user object
     * @returns {boolean} true if the sign-in should be allowed, false otherwise
     */
    async signIn({ user }) {
      // List of authorized email domains
      const authorizedDomains = ["gmail.com"];

      // Extract the domain from the user's email
      const emailDomain = user.email?.split("@")[1];

      // Allow sign-in only if the email's domain is in the authorized list
      if (emailDomain && authorizedDomains.includes(emailDomain)) {
        return true; // Allow sign-in
      }

      // If the domain is not authorized, reject the sign-in
      return false;
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
