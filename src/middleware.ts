import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const protectedRoute = ["/myreservation", "/checkout", "/admin"];
export async function middleware(request: NextRequest) {
  const session = await auth(); // ambil session
  const isLoggedIn = !!session?.user; // cek status
  const role = session?.user.role || "user"; // cek role
  const { pathname } = request.nextUrl; // pathname
  if (
    !isLoggedIn &&
    protectedRoute.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && role != "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isLoggedIn && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
