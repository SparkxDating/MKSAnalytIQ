import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/site/button";
import { SiteShell } from "@/components/site/shell";
import { steps } from "@/lib/content";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — MKSAnalytIQ" },
      {
        name: "description",
        content: "How a project with MKSAnalytIQ moves from the first call in Noida to launch and the next month.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Process</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Five steps. No mystery month.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Whether the job is a social retainer, a one-day event or a product build, the shape stays
            the same. You always know what happens next.
          </p>
        </div>
      </section>

      <ol className="mx-auto max-w-3xl space-y-4 px-5 py-12">
        {steps.map((step) => (
          <li key={step.n} className="grid grid-cols-[auto_1fr] gap-4 rounded-3xl border border-line bg-card p-5">
            <span className="font-display text-2xl font-extrabold text-primary">{step.n}</span>
            <div>
              <h2 className="text-xl font-bold">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mute">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-4 rounded-3xl bg-navy p-6 text-paper md:grid-cols-3 md:p-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold">What you leave with</h2>
            <ul className="mt-4 space-y-2 text-sm text-paper/80">
              <li>A written scope before production starts.</li>
              <li>Files, accounts and repos in your name where the work allows it.</li>
              <li>A short note after launch: what moved, and what we would change.</li>
            </ul>
          </div>
          <div className="flex items-end">
            <Button asChild>
              <Link to="/contact">
                Start with a call <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="h-16 md:hidden" />
    </SiteShell>
  );
}
