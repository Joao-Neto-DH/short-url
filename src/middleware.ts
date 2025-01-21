import { NextRequest, NextResponse, userAgent } from "next/server";
import { checkLogin } from "./lib/check-login";

export async function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);

  const logged = await checkLogin();

  if (!logged && request.nextUrl.pathname.startsWith("/short")) {
    return NextResponse.redirect(new URL("/", request.url), {
      headers,
    });
  }

  if (userAgent(request).device.type === "mobile") {
    headers.set("origem", "MOVEL");
  } else {
    headers.set("origem", "PC");
  }
  return NextResponse.next({
    request: {
      headers,
    },
  });
}
