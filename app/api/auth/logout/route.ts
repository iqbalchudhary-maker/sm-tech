import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set("sm_role", "", { path: "/", maxAge: 0 });
  response.cookies.set("sm_user", "", { path: "/", maxAge: 0 });
  return response;
}
