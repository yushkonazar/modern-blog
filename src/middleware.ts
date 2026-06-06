import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/posts/(.*)/edit"]);

const ipStore = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 15;
const WINDOW = 60_000;

let lastCleanup = Date.now();
const CLEANUP_INTERVAL = 5 * 60 * 1000;

function checkRateLimit(request: NextRequest): NextResponse | null {
  if (request.method !== "POST" || !request.headers.get("next-action")) return null;

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const now = Date.now();

  if (now - lastCleanup > CLEANUP_INTERVAL) {
    for (const [key, entry] of ipStore.entries()) {
      if (now > entry.resetAt) ipStore.delete(key);
    }
    lastCleanup = now;
  }

  const entry = ipStore.get(ip);

  if (!entry || now > entry.resetAt) {
    ipStore.set(ip, { count: 1, resetAt: now + WINDOW });
    return null;
  }

  entry.count++;
  if (entry.count > LIMIT) {
    return NextResponse.json(
      { error: "Занадто багато запитів. Зачекайте хвилину." },
      { status: 429 }
    );
  }
  return null;
}

export default clerkMiddleware(async (auth, request) => {
  const rateLimitResponse = checkRateLimit(request);
  if (rateLimitResponse) return rateLimitResponse;

  if (isProtectedRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
