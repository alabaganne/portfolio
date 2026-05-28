import { NextResponse } from "next/server";

import { disabledPages } from "@/lib/disabled-pages";

export function middleware(request) {
  if (disabledPages.includes(request.nextUrl.pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}
