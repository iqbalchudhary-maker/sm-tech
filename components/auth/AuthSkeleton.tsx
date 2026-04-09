type AuthSkeletonProps = {
  title: string;
  subtitle: string;
  roleHint: "ADMIN" | "DEVELOPER";
};

export function AuthSkeleton({ title, subtitle, roleHint }: AuthSkeletonProps) {
  return (
    <section className="section-shell py-20">
      <div className="mx-auto max-w-lg rounded-3xl border border-white/15 bg-white/5 p-8">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-slate-300">{subtitle}</p>

        <div className="mt-8 space-y-4">
          <input className="w-full rounded-xl border border-white/20 bg-transparent p-3 text-sm outline-none" placeholder="Email" />
          <input
            className="w-full rounded-xl border border-white/20 bg-transparent p-3 text-sm outline-none"
            placeholder="Password"
            type="password"
          />
          <button className="w-full rounded-xl bg-neonBlue/20 px-4 py-3 text-sm font-medium text-neonBlue">Continue</button>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Auth Skeleton: set cookie <code>sm_role={roleHint}</code> after successful login/signup using NextAuth or Clerk flow.
        </p>
      </div>
    </section>
  );
}
