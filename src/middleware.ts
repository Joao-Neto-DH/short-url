import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);

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
