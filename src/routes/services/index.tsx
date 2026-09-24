import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/site/button";
import { SiteShell } from "@/components/site/shell";
import { WhatsAppButton } from "@/components/site/whatsapp";
import { extras, services } from "@/lib/content";
import { cn } from "@/lib/cn";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta({
      title: "Services | Digital Marketing, Web, Software, Apps and AI | MKSAnalytIQ",
      description:
        "Digital marketing, web development, software, app and AI development from MKSAnalytIQ in Noida, serving Delhi NCR and India. Event management remains available.",
      path: "/services",
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
            Digital marketing, websites, software, apps and AI.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Hire one practice or several. Digital marketing, web development, custom software, app development and AI
            development are the main work. Social media sits with the marketing. Event management is available when a
            launch or gathering is part of the brief.
          </p>
          <div className="mt-6">
            <WhatsAppButton source="services" message="Hello, I’d like to talk about a service." />
          </div>
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
                width={1792}
                height={1008}
                loading="lazy"
                decoding="async"
                className={cn("h-64 w-full object-cover lg:h-full", index % 2 === 1 && "lg:order-2")}
              />
              <div className={cn("p-6 sm:p-8", index % 2 === 1 && "lg:order-1")}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">0{index + 1}</p>
                <h2 className="mt-2 text-3xl font-extrabold">
                  <Link to="/services/$service" params={{ service: service.slug }} className="hover:text-primary">
                    {service.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mute">{service.blurb}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-mute">Deliverables</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {service.deliverables.map((point) => (
                    <li key={point} className="flex gap-3 text-sm">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-mute">
                  <span className="font-semibold text-ink">Suitable for: </span>
                  {service.suitable}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link to="/contact" search={{ service: service.id }}>
                      {service.cta} <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </Button>
                  <Button asChild variant="line">
                    <Link to="/services/$service" params={{ service: service.slug }}>
                      View service
                    </Link>
                  </Button>
                </div>
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
    </SiteShell>
  );
}
