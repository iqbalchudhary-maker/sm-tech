type DashboardShellProps = {
  title: string;
  description: string;
};

export function DashboardShell({ title, description }: DashboardShellProps) {
  return (
    <main className="section-shell py-14">
      <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-slate-300">{description}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <p className="text-sm text-slate-400">Widget</p>
            <p className="mt-2 text-white">Analytics Placeholder</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <p className="text-sm text-slate-400">Widget</p>
            <p className="mt-2 text-white">Projects Placeholder</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <p className="text-sm text-slate-400">Widget</p>
            <p className="mt-2 text-white">Team Activity Placeholder</p>
          </div>
        </div>
      </div>
    </main>
  );
}
