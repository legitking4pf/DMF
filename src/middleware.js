"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.middleware = void 0;
var server_1 = require("next/server");
function middleware(request) {
    // 1. Protect administrative routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
        var authCookie = request.cookies.get('auth-token');
        // If not authenticated, force-route to login
        if (!authCookie) {
            return server_1.NextResponse.redirect(new URL('/login', request.url));
        }
    }
    // 2. Add security headers to every single response
    var response = server_1.NextResponse.next();
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    return response;
}
exports.middleware = middleware;
// Ensure this only runs on relevant paths
exports.config = {
    matcher: ['/admin/:path*', '/api/:path*'],
};
