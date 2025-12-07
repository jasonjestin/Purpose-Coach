import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { D1Adapter } from '@auth/d1-adapter'

// This will be typed properly when using Cloudflare Workers
// For now, we'll use a placeholder type
declare global {
  var DB: any
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Email',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // In production, verify credentials against database
        // This is a placeholder - you'll need to implement proper auth
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // TODO: Implement actual credential verification
        // For now, this is a placeholder
        return {
          id: '1',
          email: credentials.email,
          name: 'User',
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
}
