import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      // Protect dashboard, videos, and workbooks routes
      if (
        req.nextUrl.pathname.startsWith('/dashboard') ||
        req.nextUrl.pathname.startsWith('/videos') ||
        req.nextUrl.pathname.startsWith('/workbooks')
      ) {
        return !!token
      }
      return true
    },
  },
})

export const config = {
  matcher: ['/dashboard/:path*', '/videos/:path*', '/workbooks/:path*'],
}
