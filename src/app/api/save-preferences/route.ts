import { PREFERENCES_COOKIE_NAME } from "@/constants/preferences-cookie-name";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  (await cookies()).set(PREFERENCES_COOKIE_NAME, JSON.stringify(body), {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60,
  });
  return NextResponse.json({ ok: true });
}
