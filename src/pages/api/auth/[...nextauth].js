import { login } from "@/lib/queries/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: "my-secret-123",
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Eposta",
                    type: "text",
                    placeholder: "Eposta adresinizi giriniz",
                },
                password: {
                    label: "Şifre",
                    type: "password",
                    placeholder: "Şifrenizi giriniz",
                },
            },

            async authorize(credentials, req) {
                try {

                    const { email, password } = credentials
                    return await login({ email, password })
                } catch (err) {
                    console.error(err)
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // @ts-ignore
            session.user = token;
            return session;
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/auth/signin',
    }
}
export default NextAuth(authOptions)