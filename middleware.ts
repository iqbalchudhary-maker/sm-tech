import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes: Record<string, "ADMIN" | "DEVELOPER"> = {
  "/admin": "ADMIN",
  "/developer": "DEVELOPER"
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const target = Object.entries(protectedRoutes).find(([route]) => pathname.startsWith(route));
  if (!target) return NextResponse.next();

  const requiredRole = target[1];
  const role = request.cookies.get("sm_role")?.value;

  if (!role) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (requiredRole !== role) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/developer/:path*"]
};
