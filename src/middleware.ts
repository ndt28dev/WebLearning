import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public routes
  if (
    pathname.startsWith("/admintest/auth/login") ||
    pathname.startsWith("/admintest/auth/register") ||
    pathname.startsWith("/admintest/auth/verify")
  ) {
    return NextResponse.next();
  }

  // Protect admintest
  if (pathname.startsWith("/admintest")) {
    const token = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
    });

    if (!token) {
      return NextResponse.redirect(new URL("/admintest/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admintest/:path*"],
};
