import { LayoutDashboard } from "lucide-react";

const bars = [36, 52, 44, 70, 58, 86, 74];

const lanes = [
  { label: "Campaigns", state: "In review" },
  { label: "Creatives", state: "Scheduled" },
  { label: "Pages", state: "Draft" },
];

/** Illustrative chrome only — not live account data. */
export function HeroStage() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -top-3 right-6 z-20 hidden items-center gap-2 rounded-2xl border border-line bg-card px-3 py-2 shadow-lg sm:flex">
        <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <LayoutDashboard className="size-4" aria-hidden />
        </span>
        <span className="text-xs font-semibold leading-tight text-ink">
          Example dashboard
          <br />
          <span className="font-medium text-mute">Not live results</span>
        </span>
      </div>

      <div className="rounded-2xl border border-paper/15 bg-navy p-2 shadow-2xl">
        <div className="flex aspect-video flex-col items-center justify-center rounded-xl bg-card">
          <img
            src="/media/mark.png"
            alt=""
            width={808}
            height={572}
            className="h-16 w-auto sm:h-24"
          />
          <p className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            MKS<span className="wordmark-iq">ANALYTIQ</span>
          </p>
        </div>
      </div>
      <div className="mx-auto h-2.5 w-11/12 rounded-b-xl bg-ink" />
      <div className="mx-auto h-1.5 w-2/5 rounded-b-md bg-mute/50" />

      <aside
        className="relative z-10 mt-4 ml-auto w-full max-w-sm rounded-3xl border-4 border-ink bg-card p-3 shadow-2xl sm:absolute sm:right-0 sm:bottom-6 sm:mt-0 sm:w-56"
        aria-label="Example dashboard"
      >
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold text-ink">Example dashboard</p>
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        </div>
        <p className="mt-1 text-xs text-mute">Sample layout. No performance claims.</p>
        <div className="mt-3 flex h-14 items-end gap-1" aria-hidden>
          {bars.map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-primary"
              style={{ height: `${height}%`, opacity: index % 2 ? 1 : 0.55 }}
            />
          ))}
        </div>
        <ul className="mt-3 space-y-2">
          {lanes.map((lane) => (
            <li key={lane.label} className="flex items-center justify-between gap-2 text-xs">
              <span className="text-mute">{lane.label}</span>
              <span className="rounded-full bg-paper px-2 py-0.5 font-medium text-ink">{lane.state}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
