import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

const bars = [
  { m: "A", v: 36 },
  { m: "B", v: 52 },
  { m: "C", v: 44 },
  { m: "D", v: 70 },
  { m: "E", v: 58 },
  { m: "F", v: 86 },
  { m: "G", v: 74 },
];

export function HeroStage() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -top-3 right-6 z-20 hidden items-center gap-2 rounded-2xl border border-line bg-card px-3 py-2 shadow-lg sm:flex">
        <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <TrendingUp className="size-4" />
        </span>
        <span className="text-xs font-semibold leading-tight text-ink">
          Your growth
          <br />
          our priority
        </span>
      </div>

      <div className="rounded-2xl border border-paper/15 bg-navy p-2 shadow-2xl">
        <div className="flex aspect-video flex-col items-center justify-center rounded-xl bg-card">
          <img src="/media/mark.png" alt="" className="h-16 w-auto sm:h-24" />
          <p className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            MKS<span className="wordmark-iq">ANALYTIQ</span>
          </p>
        </div>
      </div>
      <div className="mx-auto h-2.5 w-11/12 rounded-b-xl bg-ink" />
      <div className="mx-auto h-1.5 w-2/5 rounded-b-md bg-mute/50" />

      <aside className="relative z-10 -mt-24 ml-auto w-44 rounded-3xl border-4 border-ink bg-card p-3 shadow-2xl sm:absolute sm:right-0 sm:bottom-6 sm:mt-0 sm:w-52">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-ink">Business growth</p>
          <span className="size-1.5 rounded-full bg-accent" />
        </div>
        <p className="mt-1 text-xs text-mute">Sample campaign</p>
        <div className="mt-2 h-16">
          {ready ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bars} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                <Bar dataKey="v" fill="var(--color-primary)" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full rounded-md bg-paper" />
          )}
        </div>
        <dl className="mt-2 space-y-2">
          <Metric label="Total reach" value="1.2M" delta="+42%" />
          <Metric label="Leads" value="8,420" delta="+29%" />
          <div className="flex items-center justify-between gap-2">
            <div>
              <dt className="text-xs text-mute">Conversion</dt>
              <dd className="font-display text-sm font-bold tabular-nums">12.5%</dd>
            </div>
            <div
              className="size-10 rounded-full"
              style={{
                background: `conic-gradient(var(--color-primary) 45%, var(--color-line) 0)`,
              }}
              aria-hidden
            >
              <div className="m-1.5 size-7 rounded-full bg-card" />
            </div>
          </div>
        </dl>
      </aside>
    </div>
  );
}

function Metric({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="flex items-end justify-between">
      <div>
        <dt className="text-xs text-mute">{label}</dt>
        <dd className="font-display text-sm font-bold tabular-nums">{value}</dd>
      </div>
      <dd className="text-xs font-semibold text-primary">{delta}</dd>
    </div>
  );
}
