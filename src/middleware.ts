import { NextRequest, NextResponse, userAgent } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  if (userAgent(request).device.type === "mobile") {
    headers.set("origem", "MOVEL");
  } else {
    headers.set("origem", "PC");
  }
  return NextResponse.next({ headers });
}
