import { NextRequest, NextResponse } from "next/server";

// In-memory store (works for single-instance Render deployment)
const ipStore = new Map<string, { count: number; resetAt: number }>();

const LIMIT = 15;       // max Server Action calls per window
const WINDOW = 60_000;  // 1 minute

function getIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"
  );
}

export function middleware(request: NextRequest) {
  // Only rate-limit Server Action calls (Next.js sends POST with Next-Action header)
  if (request.method !== "POST" || !request.headers.get("next-action")) {
    return NextResponse.next();
  }

  const ip = getIp(request);
  const now = Date.now();
  const entry = ipStore.get(ip);

  if (!entry || now > entry.resetAt) {
    ipStore.set(ip, { count: 1, resetAt: now + WINDOW });
    return NextResponse.next();
  }

  entry.count++;

  if (entry.count > LIMIT) {
    return NextResponse.json(
      { error: "Занадто багато запитів. Зачекайте хвилину." },
      { status: 429 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
