import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// let requestCount = 0;
// export function middleware(request: NextRequest) {
//   requestCount++;
//   console.log("number of requests is " + requestCount);
//   return NextResponse.next();
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/api/:path*",
// };

// if you write path/admin then its redirect to signin
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }
}
