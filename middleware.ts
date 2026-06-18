import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Protect administrative routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get('auth-token');
    
    // If not authenticated, force-route to login
    if (!authCookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // 2. Add security headers to every single response
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  
  return response;
}

// Ensure this only runs on relevant paths
export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
