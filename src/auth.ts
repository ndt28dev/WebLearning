import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {
  InvalidEmailPasswordError,
  InvalidIsActiveAccountError,
} from "./utils/errors";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        const json = await res.json();

        const user = json?.data?.user;
        const accessToken = json?.data?.access_token;

        if (+json.statusCode === 200) {
          return {
            id: user._id.toString(), // ✅ BẮT BUỘC PHẢI LÀ `id`
            email: user.email,
            name: user.name,
            accessToken,
          };
        }

        if (+json.statusCode === 401) {
          throw new InvalidEmailPasswordError();
        }

        if (+json.statusCode === 403) {
          throw new InvalidIsActiveAccountError();
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admintest/auth/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.user = user as any;
      }
      return token;
    },
    session({ session, token }) {
      (session.user as any) = token.user;
      return session;
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
});
