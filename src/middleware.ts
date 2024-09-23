import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * Middleware that checks if the user is authenticated
 * and redirects to the signin page if not.
 *
 * This middleware is used to protect routes that should only be accessed
 * by authenticated users.
 *
 * If the user is not authenticated and tries to access a protected route,
 * the middleware redirects to the signin page.
 *
 * If the user is authenticated or is accessing a public route,
 * the middleware continues to the next middleware/route.
 *
 * @param {NextRequest} request - The request object
 * @returns {Promise<NextResponse>} - The response object
 */
export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const url = request.nextUrl.clone();

  // Check if the user is trying to access a protected route
  const protectedRoutes = ["/users"]; // Add more protected routes if needed

  if (!token && protectedRoutes.includes(url.pathname)) {
    // Redirect to /auth/signin if not authenticated
    url.pathname = "/auth/signin";
    return NextResponse.redirect(url);
  }

  // Continue if authenticated or on public routes
  return NextResponse.next();
}
