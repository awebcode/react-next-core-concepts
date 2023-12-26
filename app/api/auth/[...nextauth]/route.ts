import db from "@/util/db";
import { UserModel } from "@/util/models/userModel";
import nextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";
import Twitter from "next-auth/providers/twitter";
import { compare } from "bcrypt";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/util/clientPromise";
export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "Email", type: "email", placeholder: "email@gmail.com" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      async authorize(credentials: any, req: any) {
        await db();
        console.log("crede", credentials);
        const userExists = await UserModel.findOne({ email: credentials.email });
        if (userExists) {
          const matchPassword = await compare(credentials.password, userExists.password);
          if (!matchPassword) {
            throw new Error("Password mismatch");
          }
          return userExists;
        } else {
          const newUser = await UserModel.create({
            name: credentials.username,
            email: credentials.email,
            password: credentials.password,
          });
          console.log("newUser", newUser);
          if (newUser) {
            // Any object returned will be saved in `newUser` property of the JWT
            return newUser;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      // scope: "user:email",

      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    }),
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, profile, account }: any) {
      console.log("user: ", user);
      console.log("account: ", account);
      console.log(profile);
      return true;
    },
    jwt({ token, account, profile }: any) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }
      return token;
    },
    session({ session, token }: any) {
      session.user.accessToken = token?.accessToken;
      session.user.id = token?.sub;
      return session;
    },
    redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  debug: process.env.NODE_ENV === "development" ? true : false,

  pages: {
    // I want users to be directed here with error passed in query string as ?error=
    error: "/user/error",
    signIn: "/user",
    signOut: "/",
  },
  adapter: MongoDBAdapter(clientPromise),
  
};

export const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
