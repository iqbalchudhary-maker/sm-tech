import { NextResponse } from "next/server";

const CREDENTIALS = {
  abbas: { password: "abbas123", role: "ADMIN" as const },
  developer: { password: "developer123", role: "DEVELOPER" as const }
};

export async function POST(request: Request) {
  try {
    const { username, password } = (await request.json()) as {
      username?: string;
      password?: string;
    };

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required." }, { status: 400 });
    }

    const user = CREDENTIALS[username as keyof typeof CREDENTIALS];
    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const destination = user.role === "ADMIN" ? "/admin" : "/developer";
    const response = NextResponse.json({ ok: true, role: user.role, redirectTo: destination });
    response.cookies.set("sm_role", user.role, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8
    });
    response.cookies.set("sm_user", username, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: "Login failed.", detail: String(error) }, { status: 500 });
  }
}
