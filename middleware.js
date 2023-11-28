import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  //   const session = req.cookies.has("next-auth.session-token");

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log(session);
  if (session && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (session && req.nextUrl.pathname.startsWith("/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // return NextResponse.redirect(new URL("/dashboard", req.url));
}

// export const config = {
//   matcher: ["/login", "/register"],
// };
