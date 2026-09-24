import { cn } from "@/lib/cn";

export function Preview({ slug, className }: { slug: string; className?: string }) {
  return (
    <div className={cn("relative h-44 overflow-hidden bg-navy text-paper", className)} aria-hidden>
      {slug === "shortgen" ? <ShortGen /> : null}
      {slug === "cpaas" ? <Cpaas /> : null}
      {slug === "taxpilot" ? <Tax /> : null}
      {slug === "eye-camp" ? <Camp /> : null}
      {slug === "navi-zindagi" ? <Relief /> : null}
      {slug === "influencer-os" ? <Influencer /> : null}
    </div>
  );
}

function ShortGen() {
  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="flex items-center justify-between text-xs text-paper/70">
        <span>Workspace · Diwali offer</span>
        <span className="rounded-full bg-accent/20 px-2 py-0.5 text-accent">Rendering</span>
      </div>
      <div className="space-y-2">
        <div className="h-2 w-3/4 rounded-full bg-paper/20" />
        <div className="flex h-10 items-end gap-1">
          {[40, 70, 55, 90, 60, 80, 45, 75].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-accent"
              style={{ height: `${h}%`, opacity: i % 2 ? 1 : 0.55 }}
            />
          ))}
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-paper/15">
          <div className="h-full w-2/3 bg-primary" />
        </div>
      </div>
    </div>
  );
}

function Cpaas() {
  const rows = ["+91 ···· 4623  delivered", "OTP 184920  verified", "Webhook  200  42ms"];
  return (
    <div className="grid h-full grid-cols-5">
      <div className="col-span-2 bg-ink p-3 text-xs leading-5 text-paper/70">
        <p className="font-semibold text-paper">Router</p>
        <p>MSG91</p>
        <p className="text-accent">Android GW</p>
        <p>Exotel</p>
      </div>
      <div className="col-span-3 space-y-2 p-3 font-mono text-xs">
        {rows.map((row) => (
          <p key={row} className="rounded-md bg-paper/10 px-2 py-1.5">
            {row}
          </p>
        ))}
      </div>
    </div>
  );
}

function Tax() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 bg-card p-4 text-ink">
      <p className="text-xs font-semibold text-primary">AY 2026–27 · ITR-4</p>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {["Income", "Deductions", "JSON"].map((step, i) => (
          <div
            key={step}
            className={i < 2 ? "rounded-xl bg-primary py-2 font-semibold text-card" : "rounded-xl bg-paper py-2 font-semibold"}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-line p-3">
        <p className="text-xs text-mute">Return status</p>
        <p className="font-display text-lg font-bold">Eligibility check</p>
        <p className="text-xs text-mute">JSON export when the form is complete</p>
      </div>
    </div>
  );
}

function Camp() {
  return (
    <div className="flex h-full items-center justify-center bg-paper p-4">
      <div className="w-full max-w-xs rounded-2xl border border-line bg-card p-3 text-ink">
        <p className="text-xs font-semibold text-primary">Registration slip</p>
        <p className="font-display text-lg font-bold">TSF-2026-00041</p>
        <p className="text-xs text-mute">Chahniya · 15 Sep 2026</p>
        <div className="mt-2 grid grid-cols-4 gap-1">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className={i % 3 === 0 ? "h-3 bg-ink" : "h-3 bg-line"} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Relief() {
  return (
    <div className="relative flex h-full flex-col justify-end p-4">
      <img src="/media/ridge.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative rounded-2xl bg-ink/80 p-3">
        <p className="text-xs uppercase tracking-widest text-accent">Flood relief</p>
        <p className="font-display text-lg font-bold">Nepal & Assam</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper/20">
          <div className="h-full w-3/5 bg-accent" />
        </div>
      </div>
    </div>
  );
}

function Influencer() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 bg-ink p-3">
      {["Draft", "Review", "Live"].map((col, idx) => (
        <div key={col} className="rounded-xl bg-paper/10 p-2">
          <p className="text-xs text-paper/70">{col}</p>
          <div className={idx === 2 ? "mt-2 h-16 rounded-lg bg-accent/80" : "mt-2 h-16 rounded-lg bg-paper/15"} />
          <p className="mt-2 text-xs text-paper/60">{idx === 1 ? "#ad disclosed" : "Caption"}</p>
        </div>
      ))}
    </div>
  );
}
