import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/site/button";
import { SiteShell } from "@/components/site/shell";
import { extras, services } from "@/lib/content";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MKSAnalytIQ" },
      {
        name: "description",
        content:
          "Digital marketing, social media management, event management, and software and app development from Noida.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Four practices. Hired together or one at a time.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Most clients start with the channel that’s already leaking — ads with no landing page, an
            event with no list, or a product with no one to tell. We fix the pair, not just the loud part.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-6 px-5 py-12">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-line bg-card"
          >
            <div className="grid lg:grid-cols-2">
              <img
                src={service.image}
                alt={service.imageAlt}
                className={cn("h-64 w-full object-cover lg:h-full", index % 2 === 1 && "lg:order-2")}
              />
              <div className={cn("p-6 sm:p-8", index % 2 === 1 && "lg:order-1")}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">0{index + 1}</p>
                <h2 className="mt-2 text-3xl font-extrabold">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mute">{service.blurb}</p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6">
                  <Link to="/contact" search={{ service: service.id }}>
                    Ask about this <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-extrabold">Included when the brief needs them</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {extras.map((item) => (
              <article key={item.title} className="rounded-3xl border border-line p-5">
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="h-16 md:hidden" />
    </SiteShell>
  );
}
