"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function DevLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/dev-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = (await res.json()) as { error?: string; redirectTo?: string };
      if (!res.ok) {
        setError(data.error ?? "Login failed.");
        return;
      }
      router.push(data.redirectTo ?? "/developer");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-shell py-20">
      <div className="mx-auto max-w-lg rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="text-3xl font-semibold text-white">Developer Login</h1>
        <p className="mt-2 text-sm text-slate-300">Development auth mode with hardcoded credentials.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full rounded-xl border border-white/20 bg-transparent p-3 text-sm outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-white/20 bg-transparent p-3 text-sm outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-neonBlue/20 px-4 py-3 text-sm font-medium text-neonBlue disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {error ? <p className="mt-3 text-sm text-rose-400">{error}</p> : null}

        <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-3 text-xs text-slate-400">
          Admin: <code>abbas / abbas123</code>
          <br />
          Developer: <code>developer / developer123</code>
        </div>
      </div>
    </section>
  );
}
