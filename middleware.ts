import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  let anonId = req.cookies.get("anon_id")?.value;
  
  if (!anonId) {
    anonId = crypto.randomUUID();
    res.cookies.set({
      name: "anon_id",
      value: anonId,
      httpOnly: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365
    });
  }

  return res;
}
