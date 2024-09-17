import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const url = request.nextUrl.clone();

  // Redirect unauthenticated users away from the users page
  if (!token && url.pathname === "/") {
    url.pathname = "/auth/signin";
    return NextResponse.redirect(url);
  }

  // Continue with the request if authenticated or if not the sign in page
  return NextResponse.next();
}
