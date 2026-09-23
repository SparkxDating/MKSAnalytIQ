import { MessagesSquare, Target, Users, Workflow } from "lucide-react";
import { why } from "@/lib/content";

const icons = [Users, MessagesSquare, Workflow, Target];

export function WhySection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why MKSAnalytIQ?</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
        Why MKSAnalytIQ?
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {why.map((item, index) => {
          const Icon = icons[index] ?? Users;
          return (
            <article key={item.title} className="rounded-3xl border border-line bg-card p-5">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-paper text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
